/* eslint-disable @typescript-eslint/no-unused-vars */
// ========== NODE APPWRITE ============
import { IndexType, Permission } from 'node-appwrite';

// ========== NAME ============
import { db, commentCollection } from '../name';
// ========== DATABASE FROM CONFIG ============
import { databases } from './config';

export default async function createCommentCollection() {
  // CREATE COLLECTION
  await databases.createCollection(db, commentCollection, commentCollection, [
    Permission.read('any'),
    Permission.read('users'),
    Permission.create('users'),
    Permission.update('users'),
    Permission.delete('users'),
  ]);
  console.log('Comment Collection Created!');

  //   CREATING ATTRIBUTES AND INDEXES
  await Promise.all([
    databases.createStringAttribute(
      db,
      commentCollection,
      'content',
      10000,
      true
    ),
    databases.createEnumAttribute(
      db,
      commentCollection,
      'type',
      ['answer', 'question'],
      true
    ),
    databases.createStringAttribute(
      db,
      commentCollection,
      'typeId',
      50,
      true
    ),
    databases.createStringAttribute(
      db,
      commentCollection,
      'authorId',
      50,
      true
    ),
  ]);
  console.log('Comment Attributes Created!');
}