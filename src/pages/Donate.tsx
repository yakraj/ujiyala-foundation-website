import { useState } from 'react';

const presetAmounts = [500, 1000, 1500];

const Donate = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

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
    // Here you would integrate payment gateway
    alert('Thank you for your support!');
    setShowModal(false);
    setAmount('');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-primary mb-8 text-center">Support Ujiyala Foundation</h1>
        <form onSubmit={handleDonate} className="space-y-8">
          <div>
            <label className="block text-lg font-bold text-gray-700 mb-4">Select Amount</label>
            <div className="flex gap-4 mb-4">
              {presetAmounts.map((amt) => (
                <button
                  type="button"
                  key={amt}
                  className={`px-6 py-3 rounded-lg font-bold border-2 transition-all text-lg ${amount === amt ? 'bg-primary text-white border-primary scale-105' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-primary hover:text-white hover:border-primary'}`}
                  onClick={() => handleAmount(amt)}
                >
                  ₹{amt}
                </button>
              ))}
              <input
                type="number"
                min={1}
                placeholder="Custom"
                className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary w-32 text-lg"
                value={typeof amount === 'number' ? '' : amount}
                onChange={handleCustom}
                onFocus={() => setAmount('')}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-4 rounded-lg text-xl hover:bg-red-700 transition-all shadow-lg mt-4"
            disabled={!amount || Number(amount) <= 0}
          >
            Donate Now
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative animate-fade-in-up">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">Enter Your Details</h2>
            <form onSubmit={handlePay} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Phone</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Message (optional)</label>
                <textarea name="message" value={form.message} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" rows={3} />
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="text-lg font-bold text-gray-700">Amount: <span className="text-primary">₹{amount}</span></div>
                <button type="submit" className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-all text-lg shadow-lg">Pay</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
