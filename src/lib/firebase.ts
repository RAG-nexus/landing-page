import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);
let analytics;

// Check if Analytics is supported in the current environment
isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    } else {
      console.warn("Firebase Analytics is not supported in this environment");
    }
  })
  .catch((error) => {
    console.error("Error checking Firebase Analytics support", error);
  });

if (process.env.NODE_ENV !== "production") {
  const databaseEmulatorPort =
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_EMULATOR_PORT || "9000";
  connectDatabaseEmulator(
    database,
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_EMULATOR_HOST || "localhost",
    parseInt(databaseEmulatorPort, 10)
  );
}

export { database, analytics };
