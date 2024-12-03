import { toast } from "react-toastify";

/* eslint-disable @typescript-eslint/naming-convention */
export const REQUIRED_TOASTER = (data: any) => {
  toast.success(data.message);
};

export const ERROR_TOASTER = (error: any) => {
  toast.error(error.response.data.message);
};
