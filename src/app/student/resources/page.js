"use client";

import { useEffect, useState } from 'react';
import { getResources } from '../../../lib/firestore';

export default function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResources("student").then(setResources);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.url}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-xl font-bold">{resource.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
