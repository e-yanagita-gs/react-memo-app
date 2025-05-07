import React from "react";
import { useAuth } from "./hooks/useAuth.jsx";

export function LoginButton() {
  const { isLoggedIn, toggleIsLoggedIn } = useAuth();

  return (
    <div style={{ textAlign: "right" }}>
      <button onClick={toggleIsLoggedIn}>
        {isLoggedIn ? "ログアウト" : "ログイン"}
      </button>
    </div>
  );
}

export default LoginButton;
