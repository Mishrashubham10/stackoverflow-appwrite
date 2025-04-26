// =========== ENV VARIABLES ============
import env from '@/env';

// =========== APPWRITE ============
import { Client, Account, Avatars, Databases, Storage } from 'appwrite';

const client = new Client()
  .setEndpoint(env.appwrite.endpoint) // API ENDPOINT
  .setProject(env.appwrite.projectId); // PROJECT ID

// ======== APPWRITE DATABASES INSTANCES ==========
const databases = new Databases(client);

// ======== APPWRITE ACCOUNT ==========
const account = new Account(client);

// ======== APPWRITE AVATARS CREATION ==========
const avatars = new Avatars(client);

// ======== APPWRITE STORAGE CREATION ==========
const storage = new Storage(client);

export { client, databases, account, avatars, storage };