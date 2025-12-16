import { useState } from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const donationsData = [
  { id: 1, date: '2025-01-15', donor: 'John Doe', amount: 500, purpose: 'Feeding the Hungry' },
  { id: 2, date: '2025-01-18', donor: 'Jane Smith', amount: 1200, purpose: 'Education Support' },
  { id: 3, date: '2025-01-20', donor: 'Anonymous', amount: 50, purpose: 'General Fund' },
  { id: 4, date: '2025-01-22', donor: 'Tech Corp Inc.', amount: 5000, purpose: 'Medical Service' },
  { id: 5, date: '2025-01-25', donor: 'Sarah Connor', amount: 300, purpose: 'Slum Support' },
];

const expensesData = [
  { id: 1, date: '2025-01-16', recipient: 'City Grocery Store', amount: 450, category: 'Food Supplies' },
  { id: 2, date: '2025-01-19', recipient: 'Stationery World', amount: 800, category: 'School Kits' },
  { id: 3, date: '2025-01-21', recipient: 'City Hospital', amount: 2000, category: 'Medical Camp' },
  { id: 4, date: '2025-01-23', recipient: 'Transport Service', amount: 150, category: 'Logistics' },
];

const Transitions = () => {
  const [activeTab, setActiveTab] = useState<'donations' | 'expenses'>('donations');

  const totalDonations = donationsData.reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = expensesData.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Financial Transparency</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in complete transparency. Here you can track every penny received and spent to ensure your contributions make a real impact.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-green-500 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Total Donations</p>
                <h3 className="text-4xl font-extrabold text-gray-900">${totalDonations.toLocaleString()}</h3>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <ArrowDownCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-red-500 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Total Expenses</p>
                <h3 className="text-4xl font-extrabold text-gray-900">${totalExpenses.toLocaleString()}</h3>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <ArrowUpCircle className="w-10 h-10 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-5 px-6 text-center font-bold text-lg transition-all duration-300 ${
                activeTab === 'donations'
                  ? 'bg-green-50 text-green-700 border-b-4 border-green-500'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('donations')}
            >
              Donations Received
            </button>
            <button
              className={`flex-1 py-5 px-6 text-center font-bold text-lg transition-all duration-300 ${
                activeTab === 'expenses'
                  ? 'bg-red-50 text-red-700 border-b-4 border-red-500'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('expenses')}
            >
              Expenses Incurred
            </button>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            {activeTab === 'donations' ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-8 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-8 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Donor</th>
                    <th className="px-8 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th className="px-8 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {donationsData.map((item) => (
                    <tr key={item.id} className="hover:bg-green-50/30 transition-colors">
                      <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-600">{item.date}</td>
                      <td className="px-8 py-5 whitespace-nowrap text-sm font-semibold text-gray-900">{item.donor}</td>
                      <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-600">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {item.purpose}
                        </span>
                      </td>
                      <td className="px-8 py-5 whitespace-nowrap text-sm text-right font-bold text-green-600">+${item.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-8 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-8 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Recipient</th>
                    <th className="px-8 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-8 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {expensesData.map((item) => (
                    <tr key={item.id} className="hover:bg-red-50/30 transition-colors">
                      <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-600">{item.date}</td>
                      <td className="px-8 py-5 whitespace-nowrap text-sm font-semibold text-gray-900">{item.recipient}</td>
                      <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-600">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-8 py-5 whitespace-nowrap text-sm text-right font-bold text-red-600">-${item.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transitions;
