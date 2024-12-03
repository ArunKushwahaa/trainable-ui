import "./App.css";
import AllRoutes from "@/routes/AllRoutes";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <AllRoutes />
      <Toaster />{" "}
    </>
  );
}

export default App;
