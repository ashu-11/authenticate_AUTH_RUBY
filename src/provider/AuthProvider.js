import React, { createContext, useContext, useState } from "react";

// setup the context
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: " ",
    permissions: []
  });

  const login = (user) => {
    if (user == "admin") {
      setUser({ userName: user, permissions: ["view_extra"] });
    } else {
      setUser({ userName: user, permissions: ["view_about"] });
    }
  };

  const logout = () => {
    setUser({ userName: "", permissions: [] });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// how we are going to acees these values
export const useAuth = () => {
  return useContext(AuthContext);
};
