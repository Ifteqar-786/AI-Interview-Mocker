import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url:'postgresql://ai-interview-mocker_owner:pDsYQu0zqw3d@ep-wild-cake-a5d28sm4.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
  }
});
