const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:4000/api/public";

export const fetchStats = async () => {
  const res = await fetch(`${API_URL}/stats`);
  return res.json();
};

export const fetchDonations = async () => {
  const res = await fetch(`${API_URL}/donations`);
  return res.json();
};

export const fetchExpenses = async () => {
  const res = await fetch(`${API_URL}/expenses`);
  return res.json();
};

export const submitDonation = async (donationData: any) => {
  const res = await fetch(`${API_URL}/donate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donationData),
  });
  return res.json();
};
