'use client';

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

export default function SchoolAdmin() {
  const [announcement, setAnnouncement] = useState('');
  const [announcementMessage, setAnnouncementMessage] = useState('');

  const [jobTitle, setJobTitle] = useState('');
  const [jobCompany, setJobCompany] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobMessage, setJobMessage] = useState('');

  const handlePostAnnouncement = async (e) => {
    e.preventDefault();
    setAnnouncementMessage('Posting...');
    try {
      await addDoc(collection(db, 'announcements'), {
        content: announcement,
        timestamp: new Date(),
      });
      setAnnouncement('');
      setAnnouncementMessage('Announcement posted successfully!');
    } catch (error) {
      setAnnouncementMessage(error.message);
    }
  };

  const handleAddJob = async (e) => {
    e.preventDefault();
    setJobMessage('Adding job...');
    try {
      await addDoc(collection(db, 'jobs'), {
        title: jobTitle,
        company: jobCompany,
        location: jobLocation,
        description: jobDescription,
        timestamp: new Date(),
      });
      setJobTitle('');
      setJobCompany('');
      setJobLocation('');
      setJobDescription('');
      setJobMessage('Job added successfully!');
    } catch (error) {
      setJobMessage(error.message);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">School Admin</h2>
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Post Announcement</h3>
        <form onSubmit={handlePostAnnouncement}>
          <div className="mb-4">
            <textarea
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Write your announcement here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            Post Announcement
          </button>
        </form>
        {announcementMessage && <p className="text-green-500 text-center mt-4">{announcementMessage}</p>}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Add Job Posting</h3>
        <form onSubmit={handleAddJob}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Company"
              value={jobCompany}
              onChange={(e) => setJobCompany(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Location"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Job Description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            Add Job
          </button>
        </form>
        {jobMessage && <p className="text-green-500 text-center mt-4">{jobMessage}</p>}
      </div>
    </div>
  );
}
