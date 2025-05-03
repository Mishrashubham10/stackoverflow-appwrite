// =========== ENV VARIABLES ============
import env from '@/app/env';

// =========== APPWRITE ============
import { Client, Avatars, Databases, Storage, Users } from 'node-appwrite';

const client = new Client()
  .setEndpoint(env.appwrite.endpoint) // API ENDPOINT
  .setProject(env.appwrite.projectId) // PROJECT ID
  .setKey(env.appwrite.apiKey); // SECRET API KEY

// ======== APPWRITE DATABASES INSTANCES ==========
const databases = new Databases(client);
// ======== APPWRITE ACCOUNT ==========
const users = new Users(client);
// ======== APPWRITE AVATARS CREATION ==========
const avatars = new Avatars(client);
// ======== APPWRITE STORAGE CREATION ==========
const storage = new Storage(client);

export { client, databases, users, avatars, storage };