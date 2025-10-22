'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc, addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../../lib/firebase';

export default function ApplyPage({ params }) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        try {
          const docRef = doc(db, 'jobs', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setJob({ id: docSnap.id, ...docSnap.data() });
          } else {
            setMessage('Job not found.');
          }
        } catch (error) {
          console.error("Error fetching job: ", error);
          setMessage('Error fetching job details.');
        }
        setLoading(false);
      };
      fetchJob();
    }
  }, [id]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) {
      setMessage('Please upload your resume.');
      return;
    }

    setMessage('Submitting application...');

    try {
      // Upload resume to Firebase Storage
      const resumeRef = ref(storage, `resumes/${id}/${resume.name}`);
      await uploadBytes(resumeRef, resume);
      const resumeURL = await getDownloadURL(resumeRef);

      // Save application to Firestore
      await addDoc(collection(db, 'applications'), {
        jobId: id,
        jobTitle: job.title,
        applicantName: name,
        applicantEmail: email,
        resumeURL,
        timestamp: new Date(),
      });

      setMessage('Application submitted successfully!');
      // Optionally redirect after a few seconds
      setTimeout(() => router.push('/career'), 3000);
    } catch (error) {
      console.error("Error submitting application: ", error);
      setMessage('Error submitting application. Please try again.');
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (!job) return <div className="text-center text-red-500">{message}</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Apply for {job.title}</h2>
      <p className="text-gray-400 mb-6">{job.company} - {job.location}</p>

      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 mb-2" htmlFor="resume">
            Upload Resume (PDF)
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
        >
          Submit Application
        </button>
      </form>
      {message && <p className="text-center mt-4 text-green-500">{message}</p>}
    </div>
  );
}
