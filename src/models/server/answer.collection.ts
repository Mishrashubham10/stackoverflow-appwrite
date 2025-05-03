/* eslint-disable @typescript-eslint/no-unused-vars */
// ========== NODE APPWRITE ============
import { Permission } from 'node-appwrite';

// ========== NAME ============
import { db, answerCollection } from '../name';
// ========== DATABASE FROM CONFIG ============
import { databases } from './config';

export default async function createAnswerCollection() {
  // CREATE COLLECTION
  await databases.createCollection(db, answerCollection, answerCollection, [
    Permission.read('any'),
    Permission.read('users'),
    Permission.create('users'),
    Permission.update('users'),
    Permission.delete('users'),
  ]);
  console.log('Answer Collection Created!');

  //   CREATING ATTRIBUTES AND INDEXES
  await Promise.all([
    databases.createStringAttribute(
      db,
      answerCollection,
      'content',
      10000,
      true
    ),
    databases.createStringAttribute(
      db,
      answerCollection,
      'questionId',
      50,
      true
    ),
    databases.createStringAttribute(db, answerCollection, 'authorId', 50, true),
  ]);
  console.log('Answer Attributes Created!');
}