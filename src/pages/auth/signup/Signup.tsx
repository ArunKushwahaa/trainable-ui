import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import SignupFrom from "./components/SignupFrom";
import { Button } from "@/components/ui/button";

const Signup = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-10">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupFrom />
          {/* Login with Google Button */}
          <Button variant="outline" className="w-full mt-4">
            Sing Up with Google
          </Button>

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

export default Signup;
