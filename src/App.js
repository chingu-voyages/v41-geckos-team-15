import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
//Routes
import LandingNavigation from "./components/landing-navigation/LandingNavigation";
import Landing from "./routes/landing/Landing";
import MainDashboard from "./routes/main-dashboard/MainDashboard";
import About from "./routes/about/About";
import AccountsDashboard from "./routes/accounts-dashboard/AccountsDashboard";
import Blog from "./routes/blog/Blog";
import BudgetDashboard from "./routes/budget-dashboard/BudgetDashboard";
import Contact from "./routes/contact/Contact";
import ExpensesDashboard from "./routes/expenses-dashboard/ExpensesDashboard";
import Faq from "./routes/faq/Faq";
import Pricing from "./routes/pricing/Pricing";
import Privacy from "./routes/privacy/Privacy";
import ProfileDashboard from "./routes/profile-dashboard/ProfileDashboard";
import StatisticsDashboard from "./routes/statistics-dashboard/StatiscticsDashboard";
import Terms from "./routes/terms/Terms";
import LandingFooter from "./components/landing-footer/LandingFooter";
import SignIn from "./components/sign-in-modal/SignIn";
import Register from "./components/register-modal/Register";

const App = () => {

  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user)
  }
  const register = (user) => {
    setUser(user)
  }
  const logout = () => {
    setUser(null)
  }

  return (
    <Router>
      <LandingNavigation user={user} onLogout={logout} />
      <Routes>
        <Route path="/register" element={<Register onRegister={register} />} />
        <Route path="/login" element={<SignIn onLogin={login} />} />
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term" element={<Terms />} />

        {/*routes that requuires login*/}
        <Route path="/dashboard" element={<MainDashboard user={user} />} />
        <Route path="/dashboard/expenses" element={<ExpensesDashboard />} />
        <Route path="/dashboard/accounts" element={<AccountsDashboard />} />
        <Route path="/dashboard/budget" element={<BudgetDashboard />} />
        <Route path="/dashboard/profile" element={<ProfileDashboard />} />
        <Route path="/dashboard/statistics" element={<StatisticsDashboard />} />
      </Routes>
      <LandingFooter />
    </Router>
  );
};

export default App;
