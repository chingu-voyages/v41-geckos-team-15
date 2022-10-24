import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <LandingNavigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term" element={<Terms />} />
        <Route path="/dashboard" element={<MainDashboard />} />
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
