import { useState } from "react";
import { LoginAuthContext } from "./LoginAuthContext.jsx";

export function LoginAuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleIsLoggedIn() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <LoginAuthContext.Provider value={{ isLoggedIn, toggleIsLoggedIn }}>
      {children}
    </LoginAuthContext.Provider>
  );
}
