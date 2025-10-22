'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { getAiResponse, analyzeImage, analyzeFile } from '../../lib/ai';
import { FiSend, FiUpload, FiUser, FiCpu } from 'react-icons/fi';

export default function AiTutor() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const handleSend = async () => {
    if (input.trim() || image || file) {
      let userMessage = {};
      if (image) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          userMessage = { image: e.target.result, sender: 'user' };
          const newMessages = [...messages, userMessage];
          setMessages(newMessages);

          const aiResponse = await analyzeImage(image);
          setMessages([...newMessages, { text: aiResponse, sender: 'ai' }]);
          setImage(null);
        };
        reader.readAsDataURL(image);
      } else if (file) {
        userMessage = { file: file.name, sender: 'user' };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);

        const aiResponse = await analyzeFile(file);
        setMessages([...newMessages, { text: aiResponse, sender: 'ai' }]);
        setFile(null);
      } else {
        userMessage = { text: input, sender: 'user' };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        const userInput = input;
        setInput('');

        const aiResponse = await getAiResponse(userInput);
        if (typeof aiResponse === 'object' && aiResponse.image) {
          setMessages([...newMessages, { text: aiResponse.text, image: aiResponse.image, sender: 'ai' }]);
        } else {
          setMessages([...newMessages, { text: aiResponse, sender: 'ai' }]);
        }
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0].type.startsWith('image/')) {
      setImage(e.target.files[0]);
    } else {
      setFile(e.target.files[0]);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow flex flex-col">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">AI Tutor</h1>
          <p className="text-xl text-gray-400">
            Your personal AI assistant for learning and problem-solving.
          </p>
        </div>

        <div ref={chatContainerRef} className="bg-gray-800 rounded-xl shadow-lg p-6 flex-grow overflow-y-auto mb-8">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-4 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                {message.sender === 'ai' && <FiCpu className="text-3xl text-blue-500 flex-shrink-0" />}
                <div className={`p-4 rounded-xl max-w-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700'}`}>
                  {message.text && <p>{message.text}</p>}
                  {message.image && <Image src={message.image} alt="tutor-generated content" width={300} height={300} className="max-w-full h-auto rounded-lg mt-2" />}
                  {message.file && <p>Shared file: {message.file}</p>}
                </div>
                {message.sender === 'user' && <FiUser className="text-3xl text-gray-400 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-4 flex items-center">
          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
          <button onClick={triggerFileUpload} className="p-3 text-gray-400 hover:text-white transition-colors">
            <FiUpload className="text-2xl" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none px-4 py-2"
            placeholder="Ask the AI Tutor a question..."
          />
          <button onClick={handleSend} className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <FiSend className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
