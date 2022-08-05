import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("name");
    setIsLoggedIn(false);
  };

  const loginHandler = (email, pass) => {
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("name", email);
    setIsLoggedIn(true);
    setName(email);
  };

  return (
    <AuthContext.Provider
      value={{
        name: name,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
