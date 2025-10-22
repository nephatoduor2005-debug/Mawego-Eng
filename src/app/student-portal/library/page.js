"use client";
import { useState } from "react";
import { FiSearch, FiBook, FiChevronDown } from "react-icons/fi";

const resources = [
  { title: "Mechanical Engineering Principles", author: "John Bird", type: "Book" },
  { title: "Introduction to Electrical Engineering", author: "John Smith", type: "Book" },
  { title: "Journal of Applied Physics", publisher: "AIP Publishing", type: "Journal" },
  { title: "IEEE Xplore", publisher: "IEEE", type: "Database" },
];

export default function Library() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Student Library</h1>
        <p className="text-gray-400 mb-8">
          Your gateway to academic resources.
        </p>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for books, journals, and articles..."
            className="bg-gray-800 border border-gray-700 rounded-full w-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Resource List */}
        <div className="space-y-4">
          {filteredResources.map((resource, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <FiBook className="text-blue-400 mr-4" size={24} />
                <div>
                  <h3 className="font-bold">{resource.title}</h3>
                  <p className="text-sm text-gray-400">
                    {resource.author || resource.publisher}
                  </p>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Access
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
