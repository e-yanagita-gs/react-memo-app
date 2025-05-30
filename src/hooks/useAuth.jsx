import { useContext } from "react";
import { LoginAuthContext } from "../LoginAuthContext.jsx";

export function useAuth() {
  return useContext(LoginAuthContext);
}
