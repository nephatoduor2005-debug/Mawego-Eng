import React from 'react';

const staffMembers = [
  {
    name: 'Dr. Evelyn Reed',
    title: 'Principal',
    bio: 'Dr. Reed has been leading Mawego Engineering for over a decade, fostering an environment of innovation and academic excellence.',
    imageUrl: '/staff/evelyn-reed.jpg',
  },
  {
    name: 'Mr. David Chen',
    title: 'Deputy Principal',
    bio: 'Mr. Chen oversees the academic programs and curriculum development, ensuring that our students receive a world-class education.',
    imageUrl: '/staff/david-chen.jpg',
  },
  {
    name: 'Ms. Maria Garcia',
    title: 'Dean of Students',
    bio: 'Ms. Garcia is dedicated to supporting our students and ensuring that they have a positive and enriching experience at Mawego.',
    imageUrl: '/staff/maria-garcia.jpg',
  },
];

export default function StaffPage() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Staff</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((staff, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src={staff.imageUrl} alt={staff.name} className="w-20 h-20 rounded-full mr-4" />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{staff.name}</h2>
                  <p className="text-gray-600">{staff.title}</p>
                </div>
              </div>
              <p className="text-gray-700">{staff.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
