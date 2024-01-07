import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const [registeredUsers, setRegisteredUsers] = useState([]);

  const registerUser = (userData) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, userData]);
  };

  const userLogin = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, userLogin, logout, registerUser, registeredUsers}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
