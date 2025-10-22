'use client';

export default function CareerLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Career Hub</h2>
      {children}
    </div>
  );
}
