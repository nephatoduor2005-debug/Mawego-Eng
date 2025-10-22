'use client';

import { FiExternalLink, FiDownload } from 'react-icons/fi';

const resources = [
  {
    title: 'Introduction to Digital Logic Design',
    description: 'Lecture notes and slides for the first week of class.',
    type: 'PDF',
    link: '#'
  },
  {
    title: 'Circuit Analysis Simulation in SPICE',
    description: 'A great tutorial on using SPICE for circuit analysis.',
    type: 'Link',
    link: '#'
  },
  {
    title: 'Past Exam Papers - 2023',
    description: 'A collection of past exam papers to help you prepare.',
    type: 'ZIP',
    link: '#'
  },
    {
    title: 'Recommended Reading List',
    description: 'A list of books and articles to supplement your learning.',
    type: 'Link',
    link: '#'
  },
];

export default function Resources() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Student Resources</h1>
          <p className="text-xl text-gray-400">A collection of useful links, documents, and other resources.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-400">{resource.type}</span>
                <a href={resource.link} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  {resource.type === 'Link' ? <FiExternalLink /> : <FiDownload />}
                  <span>{resource.type === 'Link' ? 'Visit Link' : 'Download'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
