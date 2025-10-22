"use client";

import { useEffect, useState } from 'react';
import { getJob } from '../../../lib/firestore';
import { useParams } from 'next/navigation';

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (id) {
      getJob(id).then(setJob);
    }
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="text-gray-400">{job.company}</p>
        <p className="text-gray-300">{job.location}</p>
        <p className="mt-6">{job.description}</p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
    </div>
  );
}
