"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signup, useAuth } from '../../lib/auth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();
  const user = useAuth();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-stretch justify-center min-h-screen bg-gray-900 text-white">
      {/* Left Column: Hero Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-800 p-12">
        <h1 className="text-5xl font-bold mb-4">Mawego Engineering</h1>
        <p className="text-xl text-gray-400">
          Your gateway to a world-class engineering education.
        </p>
      </div>

      {/* Right Column: Signup Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold text-center">Create Your Account</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-transparent focus:border-blue-500 focus:ring-blue-500 text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-transparent focus:border-blue-500 focus:ring-blue-500 text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-transparent focus:border-blue-500 focus:ring-blue-500 text-white"
                placeholder="••••••••"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-400">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}