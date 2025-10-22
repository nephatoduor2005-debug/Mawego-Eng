import { FiBook, FiUser, FiHelpCircle, FiMessageSquare, FiCpu, FiVideo, FiBookOpen } from 'react-icons/fi';
import Link from 'next/link';

export default function StudentPortal() {
  const portalItems = [
    {
      name: 'My Courses',
      href: '/student/courses',
      icon: FiBook,
      description: 'Access your enrolled courses and materials.',
    },
    {
      name: 'My Profile',
      href: '/student/profile',
      icon: FiUser,
      description: 'View and manage your personal information.',
    },
    {
      name: 'Resources',
      href: '/student/resources',
      icon: FiHelpCircle,
      description: 'Find helpful resources and support materials.',
    },
    {
      name: 'Student Library',
      href: '/student/library',
      icon: FiBookOpen,
      description: 'Access the digital library for your research.',
    },
    {
      name: 'Discussion Forum',
      href: '/discussion',
      icon: FiMessageSquare,
      description: 'Engage in discussions with peers and instructors.',
    },
    {
      name: 'AI Tutor',
      href: '/ai-tutor',
      icon: FiCpu,
      description: 'Get instant help and guidance from our AI tutor.',
    },
    {
      name: 'Live Video Class',
      href: '/live-video-class',
      icon: FiVideo,
      description: 'Join live classes and interactive sessions.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-extrabold text-center mb-16">Student Portal</h1>
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
