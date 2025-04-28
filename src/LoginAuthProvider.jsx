import { useState } from "react";
import { LoginAuthContext } from "./LoginAuthContext.jsx";

export default function LoginAuthProvider({ children }) {
  const [loginStatus, setLoginStatus] = useState(false);

  function toggleLoginStatus() {
    setLoginStatus(!loginStatus);
  }

  return (
    <LoginAuthContext.Provider value={{ loginStatus, toggleLoginStatus }}>
      {children}
    </LoginAuthContext.Provider>
  );
}
