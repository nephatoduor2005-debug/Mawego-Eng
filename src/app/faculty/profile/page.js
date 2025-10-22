"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAuth } from '../../../lib/auth-context';
import { getFaculty } from '../../../lib/firestore';

export default function Profile() {
  const { user } = useAuth();
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    if (user) {
      getFaculty(user.uid).then(setFaculty);
    }
  }, [user]);

  if (!faculty) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="flex items-center space-x-6">
          <Image
            src={faculty.profilePicture}
            alt="Profile Picture"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{faculty.name}</h2>
            <p className="text-gray-400">{faculty.email}</p>
            <p className="text-gray-300">{faculty.department}</p>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
