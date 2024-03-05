import { initializeApp } from 'firebase/app'

// Firebase Configuration
const firebaseConfig = {
	apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BBUCKET,
	messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
}

// Firebase 初期化
const app = initializeApp(firebaseConfig)
