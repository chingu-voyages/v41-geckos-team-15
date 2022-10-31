import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Routes
import LandingNavigation from "./components/landing-navigation/LandingNavigation";
import Landing from "./routes/landing/Landing";
import About from "./routes/about/About";
import Blog from "./routes/blog/Blog";
import Contact from "./routes/contact/Contact";
import Faq from "./routes/faq/Faq";
import Pricing from "./routes/pricing/Pricing";
import Privacy from "./routes/privacy/Privacy";
import Terms from "./routes/terms/Terms";
import LandingFooter from "./components/landing-footer/LandingFooter";
import SignIn from "./components/sign-in-modal/SignIn";
import Register from "./components/register-modal/Register";
import Dashboard from "./routes/dashboard/Dashboard"
import { useState } from "react";

const App = () => {

  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user)
  }
  const logout = () => {
    setUser(null);
  }

  return (

    <Router>
      <LandingNavigation user={user} onLogout={logout} />
      <Routes>
        <Route path="/register" element={<Register onRegister={login} />} />
        <Route path="/login" element={<SignIn onLogin={login} />} />
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard/*" element={<Dashboard user={user} onLogout={logout} />} />
      </Routes>
      <LandingFooter />
    </Router>
  );
};

export default App;
