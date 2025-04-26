/* eslint-disable @typescript-eslint/no-unused-vars */
// ========== NODE APPWRITE ============
import { IndexType, Permission } from 'node-appwrite';

// ========== NAME ============
import { db, voteCollection } from '../name';
// ========== DATABASE FROM CONFIG ============
import { databases } from './config';

export default async function createVoteCollection() {
  // CREATE COLLECTION
  await databases.createCollection(db, voteCollection, voteCollection, [
    Permission.read('any'),
    Permission.read('users'),
    Permission.create('users'),
    Permission.update('users'),
    Permission.delete('users'),
  ]);
  console.log('Vote Collection Created!');

  //   CREATING ATTRIBUTES AND INDEXES
  await Promise.all([
    databases.createEnumAttribute(
      db,
      voteCollection,
      'type',
      ['answer', 'question'],
      true
    ),
    databases.createStringAttribute(db, voteCollection, 'typeId', 50, true),
    databases.createEnumAttribute(
      db,
      voteCollection,
      'typeStatus',
      ['upvoted', 'downvoted'],
      true
    ),
    databases.createStringAttribute(db, voteCollection, 'votedById', 50, true),
  ]);
  console.log('Vote Attributes Created!');
}