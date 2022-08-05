import react, { useState, useEffect, useContext } from "react";
const AuthContext = react.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isLoggedInToken = localStorage.getItem("isLoggedIn");
    if (isLoggedInToken === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
