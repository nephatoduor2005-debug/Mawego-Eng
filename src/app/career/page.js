'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getJobs } from '../../lib/firestore';
import { FiArrowRight } from 'react-icons/fi';

export default function CareerHub() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Career Hub</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find your dream job or internship from our curated list of opportunities. Ready to take the next step in your career?
          </p>
          <Link href="/career/post-a-job" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
              Post a Job
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job) => (
            <div key={job.id} className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col transform hover:-translate-y-2 transition-transform">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-400 text-lg mb-1">{job.company}</p>
                <p className="text-gray-500 mb-4">{job.location}</p>
                <p className="text-gray-300 line-clamp-4 flex-grow">{job.description}</p>
              </div>
              <Link href={`/career/${job.id}`} className="mt-6 self-end text-blue-500 hover:text-blue-400 font-semibold flex items-center">
                  View Details & Apply <FiArrowRight className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
