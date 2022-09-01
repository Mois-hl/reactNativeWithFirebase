import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
// import { getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore'

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHKDtkFQD71NdbRts9av430Ji233PqlDI",
  authDomain: "reactnative-802f7.firebaseapp.com",
  projectId: "reactnative-802f7",
  storageBucket: "reactnative-802f7.appspot.com",
  messagingSenderId: "738706165389",
  appId: "1:738706165389:web:8c885b829af7cd48e75cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// const auth = getAuth()

// // Github's provider
// const provider = new GithubAuthProvider()

// // sign up with email and password
// export function singUp (email, password) {
//   return createUserWithEmailAndPassword(auth, email, password)
// }

// // log in with email and password
// export function loginWithEmail (email, password) {
//   return signInWithEmailAndPassword(auth, email, password)
// }
// // log out
// export function logOut () {
//   return signOut(auth)
// }

// // Custom Hook for onAuthStateChanged
// export function useAuth () {
//   const [currentUser, setCurrentUser] = useState()

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
//     return unsub
//   }, [])
//   return currentUser
// }

// // Login with GitHub
// export const loginWithGitHub = () => {
//   return signInWithPopup(auth, provider)
//   // const {photoUrl, screenName, email} = userInfo.user.reloadUserInfo;
//   // return {
//   //  avatar: photoUrl,
//   //  userName: screenName,
//   //  email: email
//   // }
// }


// an insert to database
export const addUser = ({ name, email, phone }) => {
  return addDoc(collection(db, 'users'), {
    name,
    email,
    phone,
  })
}

// Custom Hook for getDocs from the database
// export function useTimeline () {
//   const [timeline, setTimeline] = useState([])

//   useEffect(() => {
//     getDocs(collection(db, 'users'))
//       .then(snapshot => {
//         const lists = snapshot.docs.map((doc) => ({
//           docId: doc.id,
//           ...doc.data()
//         }))
//         setTimeline(lists)
//       })
//   }, [])

//   return timeline
// }
