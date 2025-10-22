import { getFirestore, collection, getDocs, doc, addDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

// --- Discussions --- //

export const getDiscussions = async () => {
  const querySnapshot = await getDocs(collection(db, "discussions"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getDiscussion = async (id) => {
  const docRef = doc(db, "discussions", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const createDiscussion = async (discussion) => {
  const docRef = await addDoc(collection(db, "discussions"), {
    ...discussion,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};

export const getReplies = async (discussionId) => {
    const querySnapshot = await getDocs(collection(db, `discussions/${discussionId}/replies`));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export const createReply = async (discussionId, reply) => {
  const docRef = await addDoc(collection(db, `discussions/${discussionId}/replies`), {
    ...reply,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};
