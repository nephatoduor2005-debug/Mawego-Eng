"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAuth } from '../../../lib/auth-context';
import { getStudent } from '../../../lib/firestore';

export default function Profile() {
  const { user } = useAuth();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    if (user) {
      getStudent(user.uid).then(setStudent);
    }
  }, [user]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="flex items-center space-x-6">
          <Image
            src={student.profilePicture}
            alt="Profile Picture"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <p className="text-gray-400">{student.email}</p>
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
