/* eslint-disable @typescript-eslint/no-unused-vars */
// ========== NODE APPWRITE ============
import { IndexType, Permission } from 'node-appwrite';

// ========== NAME ============
import { questionAttachmentBucket } from '../name';
// ========== DATABASE FROM CONFIG ============
import { storage } from './config';

export default async function getOrCreateStorage() {
  // CREATE STORAGE
  try {
    await storage.getBucket(questionAttachmentBucket);
    console.log('Storage Connected');
  } catch (error) {
    try {
      await storage.createBucket(
        questionAttachmentBucket,
        questionAttachmentBucket,
        [
          Permission.read('any'),
          Permission.read('users'),
          Permission.create('users'),
          Permission.update('users'),
          Permission.delete('users'),
        ],
        false,
        undefined,
        undefined,
        ['jpg', 'png', 'gif', 'jpeg', 'webp', 'heic']
      );
      console.log('Storage Created');
      console.log('Storage Coonected');
    } catch (error) {
      console.log('Error creating storage:', error);
    }
  }
}