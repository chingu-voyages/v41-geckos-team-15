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
import { useState, useEffect } from "react";
import SingleBlogPost from "./routes/blog-post/SingleBlogPost";
import ForgotPassword from "./components/forgot-password/ForgotPasswor";

const App = () => {
  const [isLoginModalOpen, setLoginModal] = useState(false);
  const [isSignupModalOpen, setSignupModal] = useState(false);
  const [isForgotPasswordOpen, setForgotPassword] = useState(false);
  const [user, setUser] = useState(null);

  //Keep user logged in when refreshing the page
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const login = (user) => setUser(user)

  const logout = () => {
    setUser(null);
    localStorage.clear();
  }
  const openLogin = () => setLoginModal(true);
  const openSignup = () => setSignupModal(true);
  const openForgotPassword = () => setForgotPassword(true);

  const closeModal = () => {
    setLoginModal(false);
    setSignupModal(false);
    setForgotPassword(false);
  }

  return (

    <Router>
      {isLoginModalOpen && <SignIn onLogin={login} openSignup={openSignup} closeLogin={closeModal} openForgotPassword={openForgotPassword} />}
      {isSignupModalOpen && <Register onRegister={login} openLogin={openLogin} closeSignup={closeModal} />}
      {isForgotPasswordOpen && <ForgotPassword closeForgotPassword={closeModal} />}

      <LandingNavigation user={user} onLogout={logout} openLogin={openLogin} openSignup={openSignup} />
      <Routes>
        <Route path="/" element={<Landing openSignup={openSignup} isSignupModalOpen={isSignupModalOpen} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing openSignup={openSignup} />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog/:id" element={<SingleBlogPost />} />
        <Route path="/dashboard/*" element={<Dashboard user={user} onLogout={logout} />} />
      </Routes>
      <LandingFooter openSignup={openSignup} />
    </Router>
  );
};

export default App;
