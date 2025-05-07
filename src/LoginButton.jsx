import React from "react";
import { useAuth } from "./hooks/useAuth.jsx";

export function LoginButton() {
  const { loginStatus, toggleLoginStatus } = useAuth();

  return (
    <div style={{ textAlign: "right" }}>
      <button onClick={toggleLoginStatus}>
        {loginStatus ? "ログアウト" : "ログイン"}
      </button>
    </div>
  );
}

export default LoginButton;
