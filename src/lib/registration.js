import * as z from "zod";

const registrationSchema = z
  .object({
    name: z.string().min(1, "Please enter name"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email"),
    username: z
      .string()
      .min(1, "Username is required")
      .max(40, "Maximum 40 characters in username"),
    password: z.string().min(1, {
      message: "Please enter a password",
    }),
    confirmPassword: z.string().min(1, {
      message: "Please confirm your password",
    }),
    password: z.string().min(6, {
      message: "Please make sure passowrd is more than 6 characters",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: "confirmPassword",
    message: "Passwords do not match",
  });

export default registrationSchema;
