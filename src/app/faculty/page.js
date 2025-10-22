import { FiBook, FiUser, FiBriefcase, FiMessageSquare, FiCpu, FiVideo } from 'react-icons/fi';
import Link from 'next/link';

export default function FacultyPortal() {
  const portalItems = [
    {
      name: 'My Courses',
      href: '/faculty/courses',
      icon: FiBook,
      description: 'Manage your courses, assignments, and student submissions.',
    },
    {
      name: 'My Profile',
      href: '/faculty/profile',
      icon: FiUser,
      description: 'Update your profile and professional information.',
    },
    {
      name: 'Faculty Resources',
      href: '/faculty/resources',
      icon: FiBriefcase,
      description: 'Access resources and materials for faculty members.',
    },
    {
      name: 'Discussion Forum',
      href: '/discussion',
      icon: FiMessageSquare,
      description: 'Engage in discussions with colleagues and students.',
    },
    {
      name: 'AI Tutor',
      href: '/ai-tutor',
      icon: FiCpu,
      description: 'Utilize the AI tutor for course and student support.',
    },
    {
      name: 'Live Video Class',
      href: '/live-video-class',
      icon: FiVideo,
      description: 'Host live, interactive classes with your students.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-extrabold text-center mb-16">Faculty Portal</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portalItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <div className="bg-gray-800 rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform cursor-pointer h-full flex flex-col">
                <item.icon className="text-5xl text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-gray-400 flex-grow">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
