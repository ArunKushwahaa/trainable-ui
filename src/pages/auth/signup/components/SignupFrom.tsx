import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import FormInputField from "@/components/custom-ui/FormInputField";

import FormSelect from "@/components/custom-ui/FormSelect";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required",
  }),
  password: z.string().min(2, {
    message: "Password is required",
  }),
  confrim_password: z.string().min(2, {
    message: "Password is required",
  }),
});

export default function SignupFrom() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data::", data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4  ">
          {/* Full Name Field */}
          <FormInputField
            name="full_name"
            label="Full Name"
            type="text"
            placeholder="Full Name"
            control={form.control}
          />

          {/* company Name Field */}
          <FormInputField
            name="company_name"
            label="Company Name"
            type="text"
            placeholder="Company Name"
            control={form.control}
          />

          {/* Email Field */}
          <FormInputField
            name="email"
            label="Company Email"
            type="email"
            placeholder="Company Email"
            control={form.control}
          />

          {/* Website Field */}
          <FormInputField
            name="email"
            label="company Website"
            type="url"
            placeholder="Company Website"
            control={form.control}
          />

          {/* package select */}
          <FormSelect
            name="package"
            label="Select Package"
            control={form.control}
          />

          {/* Password Field */}
          <FormInputField
            name="password"
            label="Password"
            type="password"
            placeholder="********"
            control={form.control}
          />

          {/* Confirm Password Field */}
          <FormInputField
            name="confrim_password"
            label="Confirm Password"
            type="password"
            placeholder="********"
            control={form.control}
          />

          {/* Login Button */}
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </div>
      </form>
    </Form>
  );
}
