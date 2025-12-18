import { useEffect, useState } from "react";
import { Users, DollarSign, HeartHandshake } from "lucide-react";
import { fetchStats } from "../services/api";
import { socket } from "../services/socket";

const StatsSection = () => {
  const [stats, setStats] = useState({
    totalExpenses: 0,
    activeMembers: 0,
    totalDonations: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchStats();
        if (data.ok) {
          setStats(data.stats);
        }
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };

    loadStats();

    socket.on("stats-update", loadStats);

    return () => {
      socket.off("stats-update", loadStats);
    };
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      currencyDisplay: "symbol",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-secondary py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e63946_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Total Expenses */}
          <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                <DollarSign className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h3 className="text-5xl font-extrabold text-white mb-3 tracking-tight">
              {formatCurrency(stats.totalExpenses)}
            </h3>
            <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold">
              Total Expenses in Aid
            </p>
          </div>

          {/* Members */}
          <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                <Users className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h3 className="text-5xl font-extrabold text-white mb-3 tracking-tight">
              {stats.activeMembers.toLocaleString()}+
            </h3>
            <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold">
              Active Members
            </p>
          </div>

          {/* Donations */}
          <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                <HeartHandshake className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h3 className="text-5xl font-extrabold text-white mb-3 tracking-tight">
              {formatCurrency(stats.totalDonations)}
            </h3>
            <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold">
              Donations Received
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
