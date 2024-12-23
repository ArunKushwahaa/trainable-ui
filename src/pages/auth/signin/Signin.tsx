import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import LoginFrom from "./components/LoginFrom";
import { Button } from "@/components/ui/button";
import { AUTH_ROUTE } from "@/lib/constants/route_list";

const Signin = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Log In</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginFrom />
          <Link
            to={AUTH_ROUTE.FORGOT_PASSWORD}
            className="ml-auto inline-block text-sm underline mt-2"
          >
            Forgot your password?
          </Link>
          {/* Login with Google Button */}
          <Button variant="outline" className="w-full mt-4">
            Log In with Google
          </Button>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to={AUTH_ROUTE.SIGNUP} className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signin;
