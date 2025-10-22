'use client';

import { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../../../lib/firebase'; // Corrected import path

export default function DevAdmin() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('dev_admin'); // Default role
  const [message, setMessage] = useState('');

  const handleAddRole = async () => {
    if (!email) {
      setMessage('Please enter an email address.');
      return;
    }

    setMessage('Assigning role...');

    try {
      const addRole = httpsCallable(functions, 'addRole');
      const result = await addRole({ email, role });
      setMessage(result.data.message);
    } catch (error) {
      console.error("Error assigning role: ", error);
      setMessage(error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Developer Admin</h2>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Assign Role to User</h3>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
          >
            <option value="dev_admin">Developer Admin</option>
            <option value="school_admin">School Admin</option>
          </select>
          <button
            onClick={handleAddRole}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            Assign Role
          </button>
        </div>
        {message && <p className="text-center mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
}
