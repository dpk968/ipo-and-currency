import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AuthGuard from "./gaurds/AuthGaurd";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import RegistrationForm from "./components/register/RegistrationForm";
import LandingPage from "./components/landing/LandingPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/signup" element={<RegistrationForm />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
