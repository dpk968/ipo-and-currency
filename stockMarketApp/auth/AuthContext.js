// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pass,setPass] = useState(null);

  const login = (name,pass) => {
    setUser({ username: name });
    setPass({password: pass})
  };

  const register = (name,pass) => {
    setUser({ username: name });
    setPass({password: pass})
  };
  const logout = () => {
    setUsername(null);
    setPassword(null);
  };


  return (
    <AuthContext.Provider value={{ user,pass, login, logout,register}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
