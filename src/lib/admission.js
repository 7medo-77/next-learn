import * as z from "zod";

const admissionSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: z.string().min(1, {
    message: "Please enter a password",
  }),
  password: z.string().min(6, {
    message: "Please make sure passowrd is more than 6 characters",
  }),
});

export default admissionSchema;
