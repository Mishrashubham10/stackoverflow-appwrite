import { useAuthStore } from '@/store/Auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  if (session) {
    return null;
  }

  return (
    <main className="">
      <section className="">{children}</section>
    </main>
  );
}