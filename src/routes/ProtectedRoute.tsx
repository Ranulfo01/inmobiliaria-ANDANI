import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  //  si no es admin, lo sacamos
  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}