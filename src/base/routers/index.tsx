import { useRoutes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";

export default function ThemeRoutes() {
  return useRoutes([PublicRoutes]);
}
