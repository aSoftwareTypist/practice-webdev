import dotenv from "dotenv";
dotenv.config();

function required(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing env variable: ${key}`);
  return value;
}


export const WEB_ENV = {
    HOST: required("HOST"),
    PORT: parseInt(required("PORT"))
}