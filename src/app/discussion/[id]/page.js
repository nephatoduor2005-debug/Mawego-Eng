'use client';

import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../lib/firebase'; // Corrected import path
import { doc, getDoc, collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function DiscussionPage({ params }) {
  const [user] = useAuthState(auth);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (!id) return;

    const postRef = doc(db, 'discussions', id);
    const commentsRef = collection(db, 'discussions', id, 'comments');
    const q = query(commentsRef, orderBy('timestamp', 'asc'));

    const unsubscribePost = onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        setPost({ id: doc.id, ...doc.data() });
      } else {
        // Handle post not found
      }
      setLoading(false);
    });

    const unsubscribeComments = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(commentsData);
    });

    return () => {
      unsubscribePost();
      unsubscribeComments();
    };
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    const commentsRef = collection(db, 'discussions', id, 'comments');
    await addDoc(commentsRef, {
      text: newComment,
      author: user.displayName || user.email,
      authorId: user.uid,
      timestamp: new Date(),
    });

    setNewComment('');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => router.back()} className="bg-gray-500 text-white py-2 px-4 rounded mb-4">
        Back to Discussions
      </button>
      <div className="bg-white text-black p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-700 mb-4">By: {post.author}</p>
        <p>{post.content}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Comments</h2>
        <div className="space-y-4">
          {comments.map(comment => (
            <div key={comment.id} className="bg-gray-800 p-4 rounded-lg">
              <p className="font-bold">{comment.author}</p>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>

        {user && (
          <form onSubmit={handleAddComment} className="mt-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Add a comment..."
              rows="4"
              required
            ></textarea>
            <button type="submit" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Post Comment
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
