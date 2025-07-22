'use client';

import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/lib/firebase';
import { Button } from './ui/button';

export default function GoogleSignInButton() {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('✅ Sign in success:', user.displayName);
    } catch (err) {
      console.error('❌ Sign in fail:', err);
    }
  };

  return <Button onClick={handleSignIn}>Sign in with Google</Button>;
}
