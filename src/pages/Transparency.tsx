import { useState, useEffect } from "react";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  FileText,
  Download,
} from "lucide-react";
import { fetchDonations, fetchExpenses } from "../services/api";
import { socket } from "../services/socket";

const Transparency = () => {
  const [activeTab, setActiveTab] = useState<"donations" | "expenses">(
    "donations"
  );
  const [donationsData, setDonationsData] = useState<any[]>([]);
  const [expensesData, setExpensesData] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [donationsRes, expensesRes] = await Promise.all([
          fetchDonations(),
          fetchExpenses(),
        ]);

        if (donationsRes.ok) {
          setDonationsData(
            donationsRes.donations.map((d: any) => ({
              id: d._id,
              date: new Date(d.date).toISOString().split("T")[0],
              donor: d.donorName,
              amount: d.amount,
              purpose: d.note || "General Donation",
            }))
          );
        }

        if (expensesRes.ok) {
          setExpensesData(
            expensesRes.expenses.map((e: any) => ({
              id: e._id,
              date: new Date(e.date).toISOString().split("T")[0],
              recipient: e.by,
              amount: e.amount,
              category: e.category,
            }))
          );
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    loadData();

    socket.on("new-donation", (newDonation) => {
      setDonationsData((prev) =>
        [
          {
            id: Date.now(),
            date: new Date(newDonation.date).toISOString().split("T")[0],
            donor: newDonation.donorName,
            amount: newDonation.amount,
            purpose: newDonation.note || "General Donation",
          },
          ...prev,
        ].slice(0, 10)
      );
    });

    socket.on("new-expense", (newExpense) => {
      setExpensesData((prev) =>
        [
          {
            id: Date.now(),
            date: new Date(newExpense.date).toISOString().split("T")[0],
            recipient: newExpense.by,
            amount: newExpense.amount,
            category: newExpense.category,
          },
          ...prev,
        ].slice(0, 10)
      );
    });

    return () => {
      socket.off("new-donation");
      socket.off("new-expense");
    };
  }, []);

  const totalDonations = donationsData.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const totalExpenses = expensesData.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Financial Transparency
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trust is the foundation of our work. We are committed to complete
            transparency in how we utilize funds for rural development and
            community welfare.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-green-500 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">
                  Total Donations
                </p>
                <h3 className="text-4xl font-extrabold text-gray-900">
                  ₹{totalDonations.toLocaleString()}
                </h3>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <ArrowDownCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-red-500 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">
                  Total Expenses
                </p>
                <h3 className="text-4xl font-extrabold text-gray-900">
                  ₹{totalExpenses.toLocaleString()}
                </h3>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <ArrowUpCircle className="w-10 h-10 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="flex border-b border-gray-200 flex-col sm:flex-row">
            <button
              className={`flex-1 py-4 px-6 text-center font-bold text-lg transition-all duration-300 ${
                activeTab === "donations"
                  ? "bg-green-50 text-green-700 border-b-4 border-green-500"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("donations")}
            >
              Donations Received
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-bold text-lg transition-all duration-300 ${
                activeTab === "expenses"
                  ? "bg-red-50 text-red-700 border-b-4 border-red-500"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("expenses")}
            >
              Expenses Incurred
            </button>
          </div>

          {/* Table Content */}
          <div className="transparency-table-wrapper overflow-x-auto">
            {activeTab === "donations" ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Donor
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Purpose
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {donationsData.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.donor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
                          {item.purpose}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">
                        ₹{item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Recipient
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {expensesData.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.recipient}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">
                        ₹{item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Documents Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Legal & Financial Documents
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
              <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-white">
                <FileText className="text-gray-600 group-hover:text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Annual Report 2024</h3>
                <p className="text-xs text-gray-500">PDF • 2.4 MB</p>
              </div>
              <Download
                className="ml-auto text-gray-400 group-hover:text-primary"
                size={20}
              />
            </div>
            <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
              <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-white">
                <FileText className="text-gray-600 group-hover:text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">80G Certificate</h3>
                <p className="text-xs text-gray-500">PDF • 1.1 MB</p>
              </div>
              <Download
                className="ml-auto text-gray-400 group-hover:text-primary"
                size={20}
              />
            </div>
            <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
              <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-white">
                <FileText className="text-gray-600 group-hover:text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Registration Cert.</h3>
                <p className="text-xs text-gray-500">PDF • 0.8 MB</p>
              </div>
              <Download
                className="ml-auto text-gray-400 group-hover:text-primary"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
