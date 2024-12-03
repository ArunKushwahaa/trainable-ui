// components/FormInputField.tsx
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // Adjust import as per your structure
import { BaseInput } from "@/components/custom-ui/BaseInput";

interface FormInputFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  control: any; // React Hook Form control
}

const FormInputField: React.FC<FormInputFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  control,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormControl>
            <BaseInput
              id={name}
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInputField;
