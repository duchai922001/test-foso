import { BrowserRouter } from "react-router-dom";
import ThemeRoutes from "./base/routers";

function App() {
  return (
    <BrowserRouter>
      <ThemeRoutes />
    </BrowserRouter>
  );
}

export default App;
