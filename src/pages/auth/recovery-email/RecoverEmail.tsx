import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import RecoverFrom from "./components/RecoverFrom";

const RecoverEmail = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-sm min-w-80">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email to receive reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecoverFrom />

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

export default RecoverEmail;
