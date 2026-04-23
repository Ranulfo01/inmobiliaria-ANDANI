import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AdminRoute({ children }: Props) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const token = localStorage.getItem("token");

  if (!token || user.role !== "admin") {
    return <Navigate to="/login" />;
  }
    localStorage.getItem("user")
  return <>{children}</>;
}