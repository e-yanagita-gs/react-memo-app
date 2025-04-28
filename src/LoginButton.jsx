import React, { useContext } from "react";
import { LoginAuthContext } from "./LoginAuthContext.jsx";

export function LoginButton() {
  const { loginStatus, toggleLoginStatus } = useContext(LoginAuthContext);

  return (
    <div style={{ textAlign: "right" }}>
      <button onClick={toggleLoginStatus}>
        {loginStatus ? "ログアウト" : "ログイン"}
      </button>
    </div>
  );
}

export default LoginButton;
