import { Route, Routes } from "react-router";
import Signin from "@/pages/auth/signin/Signin";
import Signup from "@/pages/auth/signup/Signup";
import RecoverEmail from "@/pages/auth/recovery-email/RecoverEmail";
import ResetPassword from "@/pages/auth/reset-password/ResetPassword";
import { AUTH_ROUTE } from "@/lib/constants/route_list";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path={AUTH_ROUTE.SIGNIN} element={<Signin />} />
      <Route path={AUTH_ROUTE.SIGNUP} element={<Signup />} />
      <Route path={AUTH_ROUTE.FORGOT_PASSWORD} element={<RecoverEmail />} />
      <Route path={AUTH_ROUTE.RESET_PASSWORD} element={<ResetPassword />} />
    </Routes>
  );
};

export default AllRoutes;
