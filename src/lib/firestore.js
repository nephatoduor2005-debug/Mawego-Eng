import { getFirestore, collection, getDocs, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

// --- Students --- //

export const getStudent = async (uid) => {
  const docRef = doc(db, "students", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

// --- Faculty --- //

export const getFaculty = async (uid) => {
  const docRef = doc(db, "faculty", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

// --- Jobs --- //

export const getJobs = async () => {
  const querySnapshot = await getDocs(collection(db, "jobs"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getJob = async (id) => {
  const docRef = doc(db, "jobs", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};


// --- Resources --- //

export const getResources = async (type) => {
  const querySnapshot = await getDocs(collection(db, "resources"));
  const resources = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return resources.filter(resource => resource.type === type);
};
