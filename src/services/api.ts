const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://wwl38t1g0ci6tp4hk9jv7by2f5sx8da7zq9b5vn0.ujiyalafoundation.org/api";
const API_URL = `${BASE_URL}/public`;

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
