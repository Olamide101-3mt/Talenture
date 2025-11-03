import { Client, Account, ID } from "appwrite";

const client = new Client();
// Use Vite environment variables for endpoint and project id.
// Create a .env file with VITE_APPWRITE_ENDPOINT and VITE_APPWRITE_PROJECT_ID
const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT = import.meta.env.VITE_APPWRITE_PROJECT_ID || "690590a40006263c28fe";

client
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);

export const account = new Account(client);
export { ID };
