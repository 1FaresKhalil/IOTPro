import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (id, name, password) => {},
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
    localStorage.removeItem("id");
    setIsLoggedIn(false);
  };

  const loginHandler = (id, name, pass) => {
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    setIsLoggedIn(true);
    setName(name);
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
