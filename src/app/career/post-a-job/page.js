'use client';

import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../lib/firebase';
import { useRouter } from 'next/navigation';

export default function PostAJob() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "jobs"), formData);
      router.push('/career');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-white font-bold mb-2">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-white font-bold mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-white font-bold mb-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-white font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white rounded py-2 px-3"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
