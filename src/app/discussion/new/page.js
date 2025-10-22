"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createDiscussion } from '../../../lib/discussion';

export default function NewDiscussion() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // This is a placeholder for the actual author. 
    // In a real application, you would get this from the logged-in user.
    const author = "Anonymous"; 
    const discussionId = await createDiscussion({ title, content, author });
    router.push(`/discussion/${discussionId}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">New Discussion</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-white font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-700 text-white rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-white font-bold mb-2">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-gray-700 text-white rounded py-2 px-3 h-32"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Discussion
        </button>
      </form>
    </div>
  );
}
