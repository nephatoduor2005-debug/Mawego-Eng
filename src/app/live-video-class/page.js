'use client';

import { useState } from 'react';
import { FiMic, FiMicOff, FiVideo, FiVideoOff, FiPhoneOff, FiUsers, FiMessageSquare } from 'react-icons/fi';

export default function LiveVideoClass() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleCamera = () => {
    setIsCameraOff(!isCameraOff);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold">Live Video Class</h1>
          <p className="text-lg text-gray-400 mt-2">Linear Algebra - Chapter 3: Vector Spaces</p>
        </div>

        <div className="flex-grow bg-black rounded-xl shadow-2xl flex items-center justify-center relative overflow-hidden">
          {isCameraOff ? (
            <div className="text-center text-gray-500">
              <FiVideoOff className="text-8xl mb-4 mx-auto" />
              <p className="text-2xl">Your camera is off</p>
            </div>
          ) : (
            <p className="text-2xl text-gray-500">Live video stream</p>
            // In a real application, this would be the <video> element
          )}
          <div className="absolute top-4 right-4 bg-gray-800 bg-opacity-70 p-3 rounded-lg flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FiUsers className="text-xl text-blue-400" />
                <span className="font-semibold">28</span>
              </div>
               <div className="flex items-center gap-2">
                <FiMessageSquare className="text-xl text-blue-400" />
                <span className="font-semibold">12</span>
              </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-xl shadow-lg p-4 max-w-lg mx-auto">
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={toggleMute}
              className={`p-4 rounded-full transition-colors ${isMuted ? 'bg-red-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              {isMuted ? <FiMicOff className="text-2xl" /> : <FiMic className="text-2xl" />}
            </button>
            <button
              onClick={toggleCamera}
              className={`p-4 rounded-full transition-colors ${isCameraOff ? 'bg-red-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              {isCameraOff ? <FiVideoOff className="text-2xl" /> : <FiVideo className="text-2xl" />}
            </button>
            <button className="p-4 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors">
              <FiPhoneOff className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
