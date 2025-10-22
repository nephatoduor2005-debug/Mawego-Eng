'use client';

import { FiUser, FiMail, FiBook, FiAward } from 'react-icons/fi';

const student = {
  name: 'John Doe',
  email: 'john.doe@mawego.ac.ke',
  course: 'BSc. in Electrical and Electronics Engineering',
  year: '3rd Year',
  gpa: '3.8',
};

export default function MyProfile() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">My Profile</h1>
          <p className="text-xl text-gray-400">Your personal information and academic standing.</p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-blue-600 rounded-full p-4">
              <FiUser className="text-4xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{student.name}</h2>
              <div className="flex items-center gap-4 mt-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <FiMail />
                  <span>{student.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <FiBook className="text-2xl text-blue-400" />
                <h3 className="text-xl font-bold">Academic Information</h3>
              </div>
              <p><span className="font-semibold">Course:</span> {student.course}</p>
              <p><span className="font-semibold">Year:</span> {student.year}</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <FiAward className="text-2xl text-blue-400" />
                <h3 className="text-xl font-bold">Academic Performance</h3>
              </div>
              <p><span className="font-semibold">Cumulative GPA:</span> {student.gpa}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
