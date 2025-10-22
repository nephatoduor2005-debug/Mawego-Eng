'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase'; // Corrected import path

export default function Admin() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return; 
    if (!user) {
      router.push('/login');
      return;
    }

    user.getIdTokenResult().then((idTokenResult) => {
      const claims = idTokenResult.claims;
      if (claims.role === 'dev_admin') {
        router.push('/admin/dev');
      } else if (claims.role === 'school_admin') {
        router.push('/admin/school');
      } else {
        router.push('/'); 
      }
    });
  }, [user, loading, router]);

  return <div>Loading...</div>;
}
