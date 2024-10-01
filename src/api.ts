import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";
import { Van, InputType, Creds, Transaction, Review } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyDvkLo6444LhE40x0rIFzzLvt1xju6NVxM",
  authDomain: "vanlife-typescript.firebaseapp.com",
  projectId: "vanlife-typescript",
  storageBucket: "vanlife-typescript.appspot.com",
  messagingSenderId: "1050310032126",
  appId: "1:1050310032126:web:73118881d5e88e990643af",
  measurementId: "G-T4SG77QY2P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const vansCollection = collection(db, "vans");
const usersCollection = collection(db, "users");
const transactionsCollection = collection(db, "transactions");
const reviewsCollection = collection(db, "reviews");

export async function getVans(): Promise<Van[]> {
  const snapshot = await getDocs(vansCollection);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(vans);
  return vans;
}

export async function getVan(id: string): Promise<Van> {
  const docRef = doc(db, "vans", id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

export async function getHostVans(hostId: string): Promise<Van[]> {
  const q = query(vansCollection, where("hostId", "==", hostId));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getHostVan(hostId: string, id: string): Promise<Van> {
  const q = query(
    vansCollection,
    where("hostId", "==", hostId),
    where("id", "==", id),
  );
  const snapshot = await getDocs(q);
  return {
    ...snapshot.docs[0].data(),
    id: snapshot.docs[0].id,
  };
}

export async function getUser(creds: InputType): Promise<Creds> {
  const q = query(
    usersCollection,
    where("email", "==", creds.email),
    where("password", "==", creds.password),
  );
  const snapshot = await getDocs(q);
  const user = snapshot.docs[0].data();
  // console.log({user})
  console.log(user)
  return user;
}

export async function getTransactions(hostId: string): Promise<Transaction[]> {
  const q = query(transactionsCollection, where("hostId", "==", hostId));
  const snapshot = await getDocs(q);
  const transactions = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return transactions;
}

export async function getReviews(hostId: string): Promise<Review[]> {
  const q = query(reviewsCollection, where("hostId", "==", hostId));
  const snapshot = await getDocs(q);
  const reviews = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return reviews;
}

