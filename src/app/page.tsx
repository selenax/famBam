'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import GoogleSignInButton from '../components/GoogleSignInButton';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center p-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">famBam</h1>
        <p className="text-muted-foreground">Log in to start planning together</p>

        <GoogleSignInButton />

        {/* uncomment below to hide dashboard if user not logged in */}
        {/* {user && ( */}
        <Link href="/dashboard">
          <Button variant="outline">Go to Dashboard</Button>
        </Link>
        {/* )} */}
      </div>
    </main>
  );
}
