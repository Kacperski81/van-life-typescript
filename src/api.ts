import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const vansCollection = collection(db, "vans");
const usersCollection = collection(db, "users");
const transactionsCollection = collection(db, "transactions");
const reviewsCollection = collection(db, "reviews");

export async function getVans(): Promise<Van[]> {
  try {
    const snapshot = await getDocs(vansCollection);
    const vans = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as Van[];
    return vans;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to fetch vans");
  }
}

export async function getVan(id: string): Promise<Van> {
  try {
    const docRef = doc(db, "vans", id);
    const snapshot = await getDoc(docRef);
    const van = {
      ...snapshot.data(),
      id: snapshot.id,
    } as Van;
    return van;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to fetch van");
  }
}

export async function getHostVans(hostId: string): Promise<Van[]> {
  try {
    const q = query(vansCollection, where("hostId", "==", hostId));
    const snapshot = await getDocs(q);
    const vans = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as Van[];
    return vans;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to fetch host vans");
  }
}

export async function getHostVan(hostId: string, id: string): Promise<Van> {
  try {
    const q = query(
      vansCollection,
      where("hostId", "==", hostId),
      where("id", "==", id),
    );
    const snapshot = await getDocs(q);
    const hostVan = {
      ...snapshot.docs[0].data(),
      id: snapshot.docs[0].id,
    } as Van;
    return hostVan;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to fetch host van");
  }
}

export async function getUser(creds: InputType): Promise<Creds> {
  try {
    const q = query(
      usersCollection,
      where("email", "==", creds.email),
      where("password", "==", creds.password),
    );
    const snapshot = await getDocs(q);
    const user = snapshot.docs[0].data() as Creds;
    return user;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to fetch user");
  }
}

export async function getTransactions(hostId: string): Promise<Transaction[]> {
  try {
    const q = query(transactionsCollection, where("hostId", "==", hostId));
    const snapshot = await getDocs(q);
    const transactions = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as Transaction[];
    return transactions;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to fetch transactions");
  }
}

export async function getReviews(hostId: string): Promise<Review[]> {
  try {
    const q = query(reviewsCollection, where("hostId", "==", hostId));
    const snapshot = await getDocs(q);
    const reviews = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as Review[];
    return reviews;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to fetch reviews");
  }
}