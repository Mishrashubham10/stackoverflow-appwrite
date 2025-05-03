// ========== NEXT ==========
import { NextResponse } from 'next/server';
// ========== DB CONNECTION ==========
import getOrCreateDB from './models/server/dbSetup';
// ========== CREATE STORAGE ==========
import getOrCreateStorage from './models/server/storageSetup';

export async function middleware() {
  await Promise.all([getOrCreateDB(), getOrCreateStorage()]);

  return NextResponse.next();
}

export const config = {
  /* match all req paths except for the ones that starts with:
    - api
    - next/static
    - _next/image
    - favicon.ico
    */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};