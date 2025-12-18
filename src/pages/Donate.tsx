import { useState } from 'react';

const presetAmounts = [500, 1000, 1500, 2500, 5000];


const initialDonors = [
  { name: 'John Doe', amount: 500, date: '2025-12-15T10:30:00' },
  { name: 'Priya Sharma', amount: 1500, date: '2025-12-15T09:10:00' },
  { name: 'Amit Patel', amount: 1000, date: '2025-12-14T18:45:00' },
  { name: 'Anonymous', amount: 200, date: '2025-12-14T15:20:00' },
];

const DONATION_GOAL = 10000;
const Donate = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [donors, setDonors] = useState(initialDonors);

  const totalRaised = donors.reduce((sum, d) => sum + (d.amount || 0), 0);
  const progress = Math.min(100, Math.round((totalRaised / DONATION_GOAL) * 100));

  const handleAmount = (val: number) => setAmount(val);
  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAmount(val === '' ? '' : Math.max(0, Number(val)));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };
  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setDonors([
      {
        name: form.name || 'Anonymous',
        amount: amount || 0,
        date: new Date().toISOString(),
      },
      ...donors,
    ]);
    setShowModal(false);
    setAmount('');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 flex flex-col items-center">
      <div className="donate-form-section w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-8 mx-2 animate-fade-in-up border border-primary/10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6 sm:mb-8 text-center">Support Ujiyala Foundation</h1>
        <p className="text-center text-gray-600 mb-4 text-base sm:text-lg">Your contribution helps us provide food, education, and medical support to those in need. Every rupee counts in lighting up lives!</p>
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Raised: ₹{totalRaised}</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Goal: ₹{DONATION_GOAL}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4">
            <div
              className="bg-primary h-3 sm:h-4 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1 text-right">{progress}% of goal</div>
        </div>
        <form onSubmit={handleDonate} className="space-y-6 sm:space-y-8">
          <div>
            <label className="block text-base sm:text-lg font-bold text-gray-700 mb-2 sm:mb-4">Select Amount</label>
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-2 sm:mb-4">
              {presetAmounts.map((amt) => (
                <button
                  type="button"
                  key={amt}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold border-2 transition-all text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-primary active:scale-95 ${amount === amt ? 'bg-primary text-white border-primary scale-105 shadow-lg' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-primary hover:text-white hover:border-primary'}`}
                  onClick={() => handleAmount(amt)}
                >
                  ₹{amt}
                </button>
              ))}
              <input
                type="number"
                min={1}
                placeholder="Custom"
                className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary w-24 sm:w-32 text-base sm:text-lg"
                value={typeof amount === 'number' ? '' : amount}
                onChange={handleCustom}
                onFocus={() => setAmount('')}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 sm:py-4 rounded-lg text-lg sm:text-xl hover:bg-red-700 transition-all shadow-lg mt-2 sm:mt-4 active:scale-95"
            disabled={!amount || Number(amount) <= 0}
          >
            Donate Now
          </button>
        </form>
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>We accept UPI, Net Banking, and all major cards. Donations are eligible for tax exemption under 80G.</p>
        </div>
      </div>

      {/* Recent Donors */}
      <div className="donate-recent-donors w-full max-w-md mt-8 sm:mt-12 mx-2">
        <h2 className="text-xl sm:text-2xl font-bold text-secondary mb-3 sm:mb-4">Recent Donors</h2>
        <div className="overflow-x-auto">
          <ul className="divide-y divide-gray-200 bg-white rounded-2xl shadow min-w-[280px] sm:min-w-0 flex sm:block flex-row sm:flex-col">
            {donors.slice(0, 6).map((donor, idx) => (
              <li key={idx} className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4 min-w-[180px] sm:min-w-0">
                <div className="flex-1 text-center sm:text-left">
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{donor.name}</div>
                  <div className="text-xs text-gray-500">{new Date(donor.date).toLocaleString()}</div>
                </div>
                <div className="text-base sm:text-lg font-bold text-primary mt-2 sm:mt-0">₹{donor.amount}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why Donate Section */}
      <div className="w-full max-w-md mt-10 mx-2 bg-primary/10 rounded-2xl p-6 text-center shadow border border-primary/10">
        <h3 className="text-lg font-bold text-primary mb-2">Why Donate to Ujiyala Foundation?</h3>
        <ul className="text-gray-700 text-sm list-disc list-inside text-left mx-auto max-w-xs">
          <li>Direct impact on food, education, and health for the needy</li>
          <li>Transparent use of funds (see <a href="/transitions" className="text-primary underline">financial reports</a>)</li>
          <li>Tax benefits under 80G</li>
          <li>Regular updates to donors</li>
        </ul>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-2">
          <div className="donate-modal bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-xs sm:max-w-sm relative animate-fade-in-up mx-2 border border-primary/20">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-primary text-2xl transition-colors" onClick={() => setShowModal(false)} aria-label="Close">&times;</button>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 text-center">Enter Your Details</h2>
            <form onSubmit={handlePay} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Phone</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Message (optional)</label>
                <textarea name="message" value={form.message} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all" rows={2} />
              </div>
              <div className="flex flex-col items-center justify-between mt-4 gap-2">
                <div className="text-base font-bold text-gray-700">Amount: <span className="text-primary">₹{amount}</span></div>
                <button type="submit" className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-all text-base shadow-lg w-full active:scale-95 mt-2">Pay</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
