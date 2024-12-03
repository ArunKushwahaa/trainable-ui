import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import ResetFrom from "./components/ResetFrom";

const ResetPassword = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">New Password</CardTitle>
          <CardDescription>
            Please enter and confirm your new password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetFrom />

          <div className="mt-4 text-center text-sm">
            Already having an account?{" "}
            <Link to="/" className="underline">
              Log In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
