'use client';

import Link from 'next/link';
import { useAuth } from '../lib/auth-context';
import { logout } from '../lib/auth';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Mawego Engineering</Link>
        <div className="space-x-4">
          <Link href="/student" className="hover:text-blue-500">Student Portal</Link>
          <Link href="/faculty" className="hover:text-blue-500">Faculty Portal</Link>
          <Link href="/career" className="hover:text-blue-500">Career Hub</Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log Out
            </button>
          ) : (
            <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
