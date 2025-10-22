import Link from "next/link";

export default function StudentPortal() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Student Portal</h1>
        <p className="text-gray-400 mb-8">Welcome to your student dashboard.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/student-portal/profile">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 cursor-pointer">
              <h2 className="text-xl font-bold mb-2">My Profile</h2>
              <p className="text-gray-400">View and edit your profile information.</p>
            </div>
          </Link>

          <Link href="/student-portal/courses">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 cursor-pointer">
              <h2 className="text-xl font-bold mb-2">My Courses</h2>
              <p className="text-gray-400">Access your registered courses.</p>
            </div>
          </Link>

          <Link href="/student-portal/library">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 cursor-pointer">
              <h2 className="text-xl font-bold mb-2">Library</h2>
              <p className="text-gray-400">Access the student library.</p>
            </div>
          </Link>

          <Link href="/student-portal/resources">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 cursor-pointer">
              <h2 className="text-xl font-bold mb-2">Resources</h2>
              <p className="text-gray-400">Find helpful resources for your studies.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
