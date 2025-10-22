import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative text-center py-40 bg-gray-800">
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            backgroundImage: `url('https://www.mawegopoly.ac.ke/images/logo.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold leading-tight">Mawego Engineering Polytechnic</h1>
          <p className="mt-4 text-2xl text-gray-300">Excellence in Technology and Innovation</p>
          <Link href="/signup" className="mt-12 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
              Apply Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Mawego?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl font-bold mb-4">World-Class Faculty</h3>
            <p className="text-gray-400">
              Learn from experienced industry professionals and renowned academics.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl font-bold mb-4">State-of-the-Art Facilities</h3>
            <p className="text-gray-400">
              Access cutting-edge labs, workshops, and technology resources.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl font-bold mb-4">Vibrant Student Life</h3>
            <p className="text-gray-400">
              Join a diverse and active community with numerous clubs and events.
            </p>
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="py-24 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-16">Explore Our Portals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-10 rounded-xl shadow-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Student Portal</h3>
            <p className="text-gray-400 mb-8">Your gateway to academic success.</p>
            <Link href="/student" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Enter
            </Link>
          </div>
          <div className="bg-gray-900 p-10 rounded-xl shadow-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Faculty Portal</h3>
            <p className="text-gray-400 mb-8">Resources for our esteemed educators.</p>
            <Link href="/faculty" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Enter
            </Link>
          </div>
        </div>
      </section>

      {/* Career Hub Section */}
      <section className="py-24 bg-gray-900">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Career Hub</h2>
          <p className="text-xl text-gray-400 mb-8">
            Connecting talent with opportunity. Find your dream job or internship from our list of curated opportunities.
          </p>
          <Link href="/career" className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
              Explore Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
