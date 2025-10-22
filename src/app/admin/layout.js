'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase'; // Corrected import path
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

export default function AdminLayout({ children }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Admin</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="/admin/dev" className="hover:text-blue-400">Dev Admin</a>
            </li>
            <li>
              <a href="/admin/school" className="hover:text-blue-400">School Admin</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </aside>
      <main className="flex-1 p-8 bg-gray-900 text-white">
        {children}
      </main>
    </div>
  );
}
