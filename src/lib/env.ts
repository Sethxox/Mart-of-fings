import zod from "zod";

const envSchema = zod.object({
  DATABASE_URL: zod.string().min(1, "DATABASE_URL cannot be empty"),
  GOOGLE_CLIENT_ID: zod.string().min(1, "GOOGLE_CLIENT_ID cannot be empty"),
  GOOGLE_CLIENT_SECRET: zod.string().min(1, "GOOGLE_CLIENT_SECRET cannot be empty"),
  NEXTAUTH_URL: zod.string().min(1, "NEXTAUTH_URL cannot be empty"),
  NEXTAUTH_SECRET: zod.string().min(1, "NEXTAUTH_SECRET cannot be empty"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error("Invalid environment variables:", parsedEnv.error.flatten());
    const errorMessages = JSON.stringify(parsedEnv.error.flatten(), null, 2);
    throw new Error(`Invalid environment variables: \n${errorMessages}`);
}

export const env = parsedEnv.data;

//   REACT_APP_PAYSTACK_PUBLIC_KEY: zod.string().min(1, "REACT_APP_PAYSTACK_PUBLIC_KEY cannot be empty")