import "./App.css";
import AllRoutes from "@/routes/AllRoutes";
import { Toaster } from "./components/ui/toaster";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AllRoutes />
      <Toaster />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
