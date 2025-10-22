'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getDiscussions } from '../../lib/discussion';
import { FiPlus, FiMessageSquare } from 'react-icons/fi';

export default function Discussion() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    getDiscussions().then(setDiscussions);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Discussion Forum</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Engage with your peers and instructors. Ask questions, share your knowledge, and collaborate on projects.
          </p>
          <Link href="/discussion/new" className="mt-8 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
            <FiPlus className="mr-3 text-2xl" />
            New Discussion
          </Link>
        </div>

        <div className="space-y-8">
          {discussions.map((discussion) => (
            <Link href={`/discussion/${discussion.id}`} key={discussion.id}>
              <div className="bg-gray-800 rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform cursor-pointer">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiMessageSquare className="text-4xl text-blue-500" />
                  </div>
                  <div className="ml-6 flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{discussion.title}</h3>
                    <p className="text-gray-400">
                      Posted by <span className="font-semibold">{discussion.author}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
