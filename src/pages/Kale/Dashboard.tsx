import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import adminApi from "../../services/adminApi";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<
    "projects" | "gallery" | "accountant"
  >("projects");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold ujiyala-font">Admin Dashboard</h1>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/kale/login";
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded shadow p-6">
          <div className="flex border-b mb-6">
            <button
              className={`px-6 py-3 ${
                activeTab === "projects"
                  ? "border-b-2 border-orange-500 font-bold"
                  : ""
              }`}
              onClick={() => setActiveTab("projects")}
            >
              Create Project
            </button>
            <button
              className={`px-6 py-3 ${
                activeTab === "gallery"
                  ? "border-b-2 border-orange-500 font-bold"
                  : ""
              }`}
              onClick={() => setActiveTab("gallery")}
            >
              Add to Gallery
            </button>
            <button
              className={`px-6 py-3 ${
                activeTab === "accountant"
                  ? "border-b-2 border-orange-500 font-bold"
                  : ""
              }`}
              onClick={() => setActiveTab("accountant")}
            >
              Accountant
            </button>
          </div>

          {activeTab === "projects" ? (
            <CreateProjectForm />
          ) : activeTab === "gallery" ? (
            <CreateGalleryForm />
          ) : (
            <AccountantPanel />
          )}
        </div>
      </div>
    </div>
  );
};

const CreateProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    duration: "",
    status: "upcoming",
    category: "Rural Development", // Default category
    volunteers: "",
    tags: "",
  });
  const [impactList, setImpactList] = useState<
    { label: string; value: string }[]
  >([]);
  // Changed to arrays for multiple files
  const [images, setImages] = useState<FileList | null>(null);
  const [videos, setVideos] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const categories = [
    "Rural Development",
    "Feeding the Hungry",
    "Slum & Village Support",
    "Rural Healthcare",
    "Educational Support",
    "Support Homeless",
    "Spreading Hope",
    "Women Empowerment",
    "Child Welfare",
    "Environment & Sustainability",
    "Disaster Relief",
    "Skill Development",
    "Animal Welfare",
    "Senior Citizen Care",
    "Clean Water & Sanitation",
    "Youth Development",
    "Cultural Heritage",
    "Human Rights",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImpactChange = (
    index: number,
    field: "label" | "value",
    value: string
  ) => {
    const newImpact = [...impactList];
    newImpact[index][field] = value;
    setImpactList(newImpact);
  };

  const addImpact = () =>
    setImpactList([...impactList, { label: "", value: "" }]);
  const removeImpact = (index: number) =>
    setImpactList(impactList.filter((_, i) => i !== index));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key as keyof typeof formData]);
      });

      // Append multiple images
      if (images) {
        for (let i = 0; i < images.length; i++) {
          data.append("images", images[i]);
        }
      }

      // Append multiple videos
      if (videos) {
        for (let i = 0; i < videos.length; i++) {
          data.append("videos", videos[i]);
        }
      }

      // Process arrays
      const volunteersArray = formData.volunteers
        .split(",")
        .map((v) => v.trim())
        .filter((v) => v);
      const tagsArray = formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t);

      data.set("volunteers", JSON.stringify(volunteersArray));
      data.set("tags", JSON.stringify(tagsArray));
      data.append("impact", JSON.stringify(impactList));

      await adminApi.post("/projects", data);
      setMessage("Project created successfully!");
      setFormData({
        title: "",
        description: "",
        location: "",
        date: "",
        duration: "",
        status: "upcoming",
        category: "Rural Development",
        volunteers: "",
        tags: "",
      });
      setImpactList([]);
      setImages(null);
      setVideos(null);
      // Reset file inputs manually if needed or rely on key change
    } catch (error) {
      console.error(error);
      setMessage("Error creating project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <div
          className={`p-4 rounded ${
            message.includes("Error")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded h-32"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Duration</label>
          <input
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="e.g. 2 hours"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Volunteers (comma separated)
        </label>
        <input
          name="volunteers"
          value={formData.volunteers}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="John, Jane, Doe"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Tags (comma separated)</label>
        <input
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Education, Health"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">
            Project Images (Multiple)
          </label>
          <input
            type="file"
            onChange={(e) => setImages(e.target.files)}
            className="w-full border p-2 rounded"
            accept="image/*"
            multiple
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Project Videos (Multiple)
          </label>
          <input
            type="file"
            onChange={(e) => setVideos(e.target.files)}
            className="w-full border p-2 rounded"
            accept="video/*"
            multiple
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Impact List</label>
        {impactList.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              placeholder="Label (e.g. Trees Planted)"
              value={item.label}
              onChange={(e) =>
                handleImpactChange(index, "label", e.target.value)
              }
              className="flex-1 border p-2 rounded"
            />
            <input
              placeholder="Value (e.g. 500)"
              value={item.value}
              onChange={(e) =>
                handleImpactChange(index, "value", e.target.value)
              }
              className="flex-1 border p-2 rounded"
            />
            <button
              type="button"
              onClick={() => removeImpact(index)}
              className="text-red-500 px-2"
            >
              X
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addImpact}
          className="text-sm text-blue-600 hover:underline"
        >
          + Add Impact Item
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create Project"}
      </button>
    </form>
  );
};

const CreateGalleryForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Rural Development");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const categories = [
    "Rural Development",
    "Feeding the Hungry",
    "Slum & Village Support",
    "Rural Healthcare",
    "Educational Support",
    "Support Homeless",
    "Spreading Hope",
    "Women Empowerment",
    "Child Welfare",
    "Environment & Sustainability",
    "Disaster Relief",
    "Skill Development",
    "Animal Welfare",
    "Senior Citizen Care",
    "Clean Water & Sanitation",
    "Youth Development",
    "Cultural Heritage",
    "Human Rights",
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!image) {
      setMessage("Please select an image");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      data.append("title", title);
      data.append("category", category);
      data.append("description", description);
      data.append("image", image);

      await adminApi.post("/gallery", data);
      setMessage("Gallery item added successfully!");
      setTitle("");
      setCategory("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error(error);
      setMessage("Error adding gallery item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      {message && (
        <div
          className={`p-4 rounded ${
            message.includes("Error")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}

      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full border p-2 rounded"
          accept="image/*"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Add to Gallery"}
      </button>
    </form>
  );
};

const AccountantPanel = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Add Expense</h2>
        <AddExpenseForm onSuccess={handleRefresh} />
      </div>
      <div className="border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Partial Payments</h2>
        <PartialPaymentsList key={refreshKey} onSuccess={handleRefresh} />
      </div>
    </div>
  );
};

const AddExpenseForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Operational",
    description: "",
    date: new Date().toISOString().split("T")[0],
    paymentType: "complete",
    amount: "",
    totalAmount: "",
    paidAmount: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const categories = [
    "Operational",
    "Project Related",
    "Salary",
    "Marketing",
    "Logistics",
    "Others",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Validation
    if (formData.paymentType === "partial") {
      if (Number(formData.paidAmount) > Number(formData.totalAmount)) {
        setMessage(
          "Error: Paying amount cannot be more than full payment amount"
        );
        setLoading(false);
        return;
      }
    }

    try {
      const payload = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        date: formData.date,
        paymentType: formData.paymentType,
        amount:
          formData.paymentType === "complete"
            ? formData.amount
            : formData.paidAmount,
        totalAmount:
          formData.paymentType === "partial"
            ? formData.totalAmount
            : formData.amount,
        isPartial: formData.paymentType === "partial",
      };

      await adminApi.post("/expenses", payload);
      setMessage("Expense added successfully!");
      setFormData({
        title: "",
        category: "Operational",
        description: "",
        date: new Date().toISOString().split("T")[0],
        paymentType: "complete",
        amount: "",
        totalAmount: "",
        paidAmount: "",
      });
      onSuccess();
    } catch (error) {
      console.error(error);
      setMessage("Error adding expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      {message && (
        <div
          className={`p-4 rounded ${
            message.includes("Error")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Payment Type</label>
          <select
            name="paymentType"
            value={formData.paymentType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="complete">Complete Payment</option>
            <option value="partial">Partial Payment</option>
          </select>
        </div>
      </div>

      {formData.paymentType === "partial" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-orange-50 p-4 rounded border border-orange-200">
          <div>
            <label className="block mb-1 font-medium">
              Full Payment Amount
            </label>
            <input
              type="number"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Now Paying Amount</label>
            <input
              type="number"
              name="paidAmount"
              value={formData.paidAmount}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>
      ) : (
        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add Expense"}
      </button>
    </form>
  );
};

const PartialPaymentsList = ({ onSuccess }: { onSuccess: () => void }) => {
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [payMoreAmount, setPayMoreAmount] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    fetchPartialPayments();
  }, []);

  const fetchPartialPayments = async () => {
    try {
      const res = await adminApi.get("/expenses");
      // Filter locally if API doesn't support filtering yet
      const data = res.data.expenses || res.data;
      const partials = Array.isArray(data)
        ? data.filter((e: any) => e.isPartial && e.paidAmount < e.totalAmount)
        : [];
      setPayments(partials);
    } catch (error) {
      console.error("Error fetching partial payments", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePayMore = async (
    id: string,
    currentPaid: number,
    total: number
  ) => {
    const amount = Number(payMoreAmount[id]);
    if (!amount || amount <= 0) return;

    if (currentPaid + amount > total) {
      alert("Cannot pay more than remaining amount");
      return;
    }

    try {
      await adminApi.put(`/expenses/${id}/pay`, { amount });
      setPayMoreAmount({ ...payMoreAmount, [id]: "" });
      fetchPartialPayments();
      onSuccess();
    } catch (error) {
      console.error("Error updating payment", error);
      alert("Failed to update payment");
    }
  };

  const handleFullSettle = async (id: string, remaining: number) => {
    if (
      !confirm(
        `Are you sure you want to pay the full remaining amount of ₹${remaining}?`
      )
    )
      return;

    try {
      await adminApi.put(`/expenses/${id}/pay`, { amount: remaining });
      fetchPartialPayments();
      onSuccess();
    } catch (error) {
      console.error("Error settling payment", error);
      alert("Failed to settle payment");
    }
  };

  if (loading) return <div>Loading partial payments...</div>;

  if (payments.length === 0) {
    return <div className="text-gray-500">No pending partial payments.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {payments.map((payment) => {
        const remaining = payment.totalAmount - payment.paidAmount;
        return (
          <div
            key={payment._id}
            className="border rounded p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{payment.title}</h3>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                Partial
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{payment.description}</p>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-medium">₹{payment.totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Paid So Far:</span>
                <span className="font-medium text-green-600">
                  ₹{payment.paidAmount}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>Remaining (Payable):</span>
                <span className="font-bold text-red-600">₹{remaining}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Amount"
                  className="border p-1 rounded w-full text-sm"
                  value={payMoreAmount[payment._id] || ""}
                  onChange={(e) =>
                    setPayMoreAmount({
                      ...payMoreAmount,
                      [payment._id]: e.target.value,
                    })
                  }
                />
                <button
                  onClick={() =>
                    handlePayMore(
                      payment._id,
                      payment.paidAmount,
                      payment.totalAmount
                    )
                  }
                  className="bg-blue-500 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                >
                  Pay More
                </button>
              </div>
              <button
                onClick={() => handleFullSettle(payment._id, remaining)}
                className="w-full bg-green-500 text-white px-3 py-2 rounded text-sm"
              >
                Full Payment & Settle
              </button>
            </div>

            {payment.history && payment.history.length > 0 && (
              <div className="mt-4 pt-2 border-t">
                <p className="text-xs font-bold text-gray-500 mb-1">
                  Payment History
                </p>
                <div className="max-h-24 overflow-y-auto text-xs text-gray-600">
                  {payment.history.map((h: any, i: number) => (
                    <div key={i} className="flex justify-between">
                      <span>{new Date(h.date).toLocaleDateString()}</span>
                      <span>₹{h.amount} (Partial Payment Done)</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
