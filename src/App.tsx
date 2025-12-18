import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Transparency from "./pages/Transparency";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Works from "./pages/Works";
import Volunteer from "./pages/Volunteer";
import Careers from "./pages/Careers";
import MediaCenter from "./pages/MediaCenter";

import ProjectDetails from "./pages/ProjectDetails";
import KaleLogin from "./pages/Kale/Login";
import KaleDashboard from "./pages/Kale/Dashboard";
import ProtectedRoute from "./pages/Kale/ProtectedRoute";

const PublicLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard Routes */}
        <Route path="/kale/login" element={<KaleLogin />} />
        <Route
          path="/kale"
          element={
            <ProtectedRoute>
              <KaleDashboard />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/about" element={<About />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/works" element={<Works />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/media" element={<MediaCenter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
