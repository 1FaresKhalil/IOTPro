import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import Welcome from "./components/Home/Welcome";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main className={!ctx.isLoggedIn ? "bg" : "mt-6"}>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home name={ctx.name} />}
      </main>
    </React.Fragment>
  );
}

export default App;
