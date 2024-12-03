import { Route, Routes } from "react-router";
import Signin from "@/pages/auth/signin/Signin";
import Signup from "@/pages/auth/signup/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
