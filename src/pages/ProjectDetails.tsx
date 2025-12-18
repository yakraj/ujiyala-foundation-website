import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  ArrowRight,
  Tag,
  CheckCircle2,
  Clock,
  Share2,
} from "lucide-react";

// This would typically come from an API or a shared data file
const projectsData = {
  "project-jal-shakti": {
    projectName: "Project Jal-Shakti",
    title: "Rural Water Conservation",
    date: "2025-12-05",
    location: "Sinnar Region, Nashik",
    category: "Rural Development",
    status: "Completed",
    duration: "3 Months",
    images: [
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Project Jal-Shakti was launched to address the acute water scarcity in the Sinnar region. We focused on building sustainable water harvesting structures that could support both domestic needs and local agriculture.",
    fullDetails:
      "The project involved the construction of three check dams and the restoration of two ancient step-wells. We also conducted workshops for 500+ farmers on efficient irrigation techniques. This initiative has successfully increased the groundwater level in the surrounding 5 villages, ensuring that even during peak summer, the community has access to water.",
    volunteers: [
      "Rahul Sharma",
      "Sneha Patil",
      "Amit Deshmukh",
      "Priya Verma",
      "Vikram Singh",
    ],
    impact: [
      "5 Villages covered",
      "2500+ People benefited",
      "3 Check dams constructed",
      "Groundwater level increased by 15%",
    ],
  },
  "project-annapurna": {
    projectName: "Project Annapurna",
    title: "Food Distribution Drive",
    date: "2025-11-20",
    location: "Nashik Slums",
    category: "Food Security",
    status: "Ongoing",
    duration: "Continuous",
    images: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Project Annapurna is our flagship hunger relief program. We believe that no one should go to bed hungry, especially in our own backyard.",
    fullDetails:
      "Every weekend, our team of volunteers prepares and distributes over 500 nutritious meals to the most vulnerable sections of society in Nashik. We also provide dry ration kits containing rice, pulses, oil, and wheat to families who have lost their primary breadwinners. During festivals, we organize special community feasts to spread joy.",
    volunteers: ["Anjali Gupta", "Karan Mehra", "Suresh Raina", "Meena Kumari"],
    impact: [
      "15,000+ Meals served till date",
      "200+ Families supported with dry rations",
      "Zero-waste kitchen model implemented",
      "Weekly distribution across 4 locations",
    ],
  },
  "project-swasthya": {
    projectName: "Project Swasthya",
    title: "Village Medical Camp",
    date: "2025-10-15",
    location: "Lonarwadi Village",
    category: "Healthcare",
    status: "Completed",
    duration: "1 Week",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584515839997-d423ab9b2e77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Project Swasthya brings quality healthcare to the doorsteps of those who cannot afford or access it in remote rural areas.",
    fullDetails:
      "Our medical camp in Lonarwadi featured a team of 5 doctors including general physicians, a pediatrician, and an ophthalmologist. We provided free consultations, basic diagnostic tests, and distributed essential medicines for a month's course to those in need. We also identified 12 patients requiring advanced surgery and are currently sponsoring their treatment.",
    volunteers: ["Dr. Sameer", "Dr. Kavita", "Rohan Das", "Sanya Malhotra"],
    impact: [
      "350+ Patients treated",
      "120+ Eye checkups done",
      "Free medicines distributed to all",
      "12 Surgeries sponsored",
    ],
  },
  "project-vidya": {
    projectName: "Project Vidya",
    title: "Education Kit Distribution",
    date: "2025-09-10",
    location: "Z.P. Schools, Sinnar",
    category: "Education",
    status: "Completed",
    duration: "2 Weeks",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Project Vidya aims to reduce school dropout rates by providing essential educational tools to underprivileged children.",
    fullDetails:
      "We identified three Zilla Parishad schools where children were struggling due to a lack of basic stationery. We distributed 'Vidya Kits' which included a sturdy school bag, 10 notebooks, a geometry box, and a set of pens/pencils. We also donated 500 books to the school libraries to encourage a habit of reading among the students.",
    volunteers: [
      "Pankaj Tripathi",
      "Shweta Tiwari",
      "Rajesh Kumar",
      "Nisha Jindal",
    ],
    impact: [
      "250+ Students received kits",
      "3 Schools supported",
      "500+ Library books donated",
      "20% Increase in attendance reported",
    ],
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const project = projectsData[id as keyof typeof projectsData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Project Not Found
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          The project you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/works"
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-red-600 transition-all"
        >
          Back to Works
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header / Navigation */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/works")}
            className="flex items-center gap-2 text-gray-600 hover:text-primary font-bold transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Works</span>
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
              <Share2 size={20} />
            </button>
            <Link
              to="/donate"
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-red-600 transition-all"
            >
              Support This Project
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Gallery & Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Image Carousel */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative group">
              <div className="aspect-video relative">
                <img
                  src={project.images[currentImage]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() =>
                      setCurrentImage(
                        (prev) =>
                          (prev - 1 + project.images.length) %
                          project.images.length
                      )
                    }
                    className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-all"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImage(
                        (prev) => (prev + 1) % project.images.length
                      )
                    }
                    className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-all"
                    aria-label="Next image"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="p-4 flex gap-4 overflow-x-auto bg-gray-50">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      currentImage === idx
                        ? "border-primary scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Content */}
            <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-4">
                {project.projectName}: {project.title}
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-gray-500 border-b pb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="text-primary" size={20} />
                  <span className="font-medium">
                    {new Date(project.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-primary" size={20} />
                  <span className="font-medium">{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-primary" size={20} />
                  <span className="font-medium">{project.duration}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                <p className="text-xl font-medium text-gray-800">
                  {project.description}
                </p>
                <p>{project.fullDetails}</p>
              </div>

              {/* Impact Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" /> Key Impact
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.impact.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-green-50 p-4 rounded-2xl border border-green-100"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-bold text-green-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Volunteers Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                <Users className="text-primary" /> Project Volunteers
              </h3>
              <div className="space-y-4">
                {project.volunteers.map((name, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {name.charAt(0)}
                    </div>
                    <span className="font-semibold text-gray-700">{name}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 bg-gray-100 text-gray-600 font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-all">
                Join as Volunteer
              </button>
            </div>

            {/* Support Card */}
            <div className="bg-secondary rounded-3xl shadow-xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Support this cause
              </h3>
              <p className="text-gray-300 mb-8 relative z-10">
                Your contribution directly funds our ongoing efforts in{" "}
                {project.location}.
              </p>
              <Link
                to="/donate"
                className="block w-full bg-primary text-white text-center font-bold py-4 rounded-xl shadow-lg hover:bg-red-600 transition-all active:scale-95 relative z-10"
              >
                Donate Now
              </Link>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <Tag className="text-primary" size={20} /> Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Rural", "Impact", "Community", "Nashik", "NGO"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-lg"
                    >
                      #{tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
