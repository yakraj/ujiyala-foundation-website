import { useState, useEffect } from "react";
import {
  Heart,
  Utensils,
  BookOpen,
  Stethoscope,
  ShieldCheck,
  CreditCard,
  X,
  CheckCircle2,
  Users,
} from "lucide-react";
import { fetchDonations, fetchStats, submitDonation } from "../services/api";

const presetAmounts = [500, 1000, 1500, 2500, 5000];

const DONATION_GOAL = 100000; // Increased goal for realism

const Donate = () => {
  const [amount, setAmount] = useState<number | "">("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [donors, setDonors] = useState<any[]>([]);
  const [totalRaised, setTotalRaised] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [donationsRes, statsRes] = await Promise.all([
          fetchDonations(),
          fetchStats(),
        ]);

        if (donationsRes.ok) {
          setDonors(
            donationsRes.donations.map((d: any) => ({
              name: d.donorName,
              amount: d.amount,
              date: d.date,
            }))
          );
        }

        if (statsRes.ok) {
          setTotalRaised(statsRes.stats.totalDonations);
        }
      } catch (error) {
        console.error("Failed to load donation data", error);
      }
    };

    loadData();
  }, []);

  const progress = Math.min(
    100,
    Math.round((totalRaised / DONATION_GOAL) * 100)
  );

  const handleAmount = (val: number) => setAmount(val);
  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAmount(val === "" ? "" : Math.max(0, Number(val)));
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };
  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await submitDonation({
        donorName: form.name,
        email: form.email,
        phone: form.phone,
        amount: amount,
        note: form.message,
        method: "upi", // Defaulting to UPI for website
      });

      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setShowModal(false);
          setIsSuccess(false);
          setAmount("");
          setForm({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      }
    } catch (error) {
      console.error("Donation failed", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="bg-secondary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empower Change with{" "}
            <span className="text-primary">Your Contribution</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Your support helps us provide essential food, education, and medical
            care to those who need it most. Join us in lighting up lives.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Impact & Info */}
          <div className="lg:col-span-7 space-y-8">
            {/* Progress Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="text-primary" /> Community Goal
              </h2>
              <div className="mb-2 flex justify-between items-end">
                <div>
                  <span className="text-3xl font-bold text-primary">
                    ₹{totalRaised.toLocaleString()}
                  </span>
                  <span className="text-gray-500 ml-2">
                    raised of ₹{DONATION_GOAL.toLocaleString()} goal
                  </span>
                </div>
                <span className="font-bold text-gray-700">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Join {donors.length} other donors who have already contributed
                to this cause.
              </p>
            </div>

            {/* Why Donate */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Why Donate?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl h-fit text-orange-600">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Food Security
                    </h4>
                    <p className="text-sm text-gray-600">
                      Provide nutritious meals to families struggling with
                      hunger.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl h-fit text-blue-600">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Education</h4>
                    <p className="text-sm text-gray-600">
                      Support children's education with books, uniforms, and
                      fees.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-xl h-fit text-green-600">
                    <Stethoscope size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Medical Aid
                    </h4>
                    <p className="text-sm text-gray-600">
                      Help fund critical medical treatments and checkups.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl h-fit text-purple-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Tax Benefits
                    </h4>
                    <p className="text-sm text-gray-600">
                      All donations are eligible for tax exemption under 80G.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Donors List */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Recent Supporters
              </h3>
              <div className="space-y-4">
                {donors.slice(0, 5).map((donor, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {donor.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {donor.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(donor.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">
                      ₹{donor.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Donation Form (Sticky) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-primary/10 sticky top-24">
              <div className="text-center mb-6">
                <Heart className="w-12 h-12 text-primary mx-auto mb-3 fill-current" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Make a Donation
                </h2>
                <p className="text-gray-500 text-sm">
                  Choose an amount to give
                </p>
              </div>

              <form onSubmit={handleDonate} className="space-y-6">
                <div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {presetAmounts.map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        className={`py-3 px-2 rounded-xl font-bold border-2 transition-all text-sm sm:text-base ${
                          amount === amt
                            ? "bg-primary text-white border-primary shadow-md transform scale-105"
                            : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                        }`}
                        onClick={() => handleAmount(amt)}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                      ₹
                    </span>
                    <input
                      type="number"
                      min={1}
                      placeholder="Enter custom amount"
                      className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold text-gray-800"
                      value={typeof amount === "number" ? amount : ""}
                      onChange={handleCustom}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl text-lg hover:bg-red-600 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  disabled={!amount || Number(amount) <= 0}
                >
                  Donate Now <Heart size={20} className="fill-current" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <CreditCard size={14} />
                  <span>Secure Payment via UPI, Cards, NetBanking</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-primary/5 p-6 border-b border-primary/10 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">
                Complete Donation
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {isSuccess ? (
                <div className="text-center py-8 animate-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600">
                    Your donation request has been submitted successfully. Our
                    team will verify it shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 text-center">
                    <p className="text-gray-500 text-sm mb-1">
                      You are donating
                    </p>
                    <p className="text-4xl font-extrabold text-primary">
                      ₹{amount}
                    </p>
                  </div>

                  <form onSubmit={handlePay} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white font-bold py-4 rounded-xl text-lg hover:bg-red-600 transition-all shadow-lg mt-4 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? "Processing..." : "Proceed to Pay"}{" "}
                      <CheckCircle2 size={20} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
