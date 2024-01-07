import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { userLogin } = useAuth();
  const [logged, setLogged] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.username === "deepak" && formData.password === "deepak") {
      userLogin();
      setLogged(true);
      alert("Login successfully");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (logged) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
