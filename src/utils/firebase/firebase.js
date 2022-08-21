import { initializeApp } from "firebase/app"
import {
      getAuth,
      signInWithPopup,
      GoogleAuthProvider,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged,
} from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc,collection,writeBatch,query,getDocs } from "firebase/firestore"
const firebaseConfig = {
      apiKey: "AIzaSyAphSte825IisaLKsficWwj4dn0PkPTl5s",
      authDomain: "crown-cloth-4077c.firebaseapp.com",
      projectId: "crown-cloth-4077c",
      storageBucket: "crown-cloth-4077c.appspot.com",
      messagingSenderId: "998502266112",
      appId: "1:998502266112:web:6abbb9d7a78af34c07afe5"
};
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
      prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
      const collectionRef = collection(db, collectionKey)
      const batch = writeBatch(db)
      objectsToAdd.forEach(object => {
            const docRef = doc(collectionRef, object.title.toLowerCase())
            batch.set(docRef,object)
      })
      await batch.commit()
}
export const getCategoriesAndDocuments = async () => {
      const collectionRef = collection(db, "categories")
      const q = query(collectionRef)

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => doc.data());
}
export const createUserDocumentFromAuth = async (userAuth,addIndo={}) => {
      if (!userAuth) return;
      const userDocRef = doc(db, "users", userAuth.uid)
      const userSnapShot = await getDoc(userDocRef)
      if (!userSnapShot.exists()) {
            const { displayName, email } = userAuth
            const createdAt = Date.now()
            try {
                  await setDoc(userDocRef, {
                        displayName,
                        email,
                        createdAt,
                        ...addIndo
                  })
            } catch (error) {
                  console.log(error)
            }
      }
      return userSnapShot
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
      if (!email || !password) return;
     return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthWithEmailAndPassword = async (email,password) => {
      if (!email || !password) return;
      return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
export const getCurrentUser = () => {
      return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
                  console.log(auth)
                  unsubscribe()
                  resolve(userAuth)
            },reject)
      })
}