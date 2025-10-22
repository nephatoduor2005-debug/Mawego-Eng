import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-white">Mawego Polytechnic</a>
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/student">
            <a className="text-gray-300 hover:text-white transition duration-200">Student Portal</a>
          </Link>
          <Link href="/faculty">
            <a className="text-gray-300 hover:text-white transition duration-200">Faculty Portal</a>
          </Link>
          <Link href="/career">
            <a className="text-gray-300 hover:text-white transition duration-200">Career Hub</a>
          </Link>
          <Link href="/admin">
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">Admin Portal</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
