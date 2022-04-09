import { useEffect, useState } from "react";
import app from "../firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });
  // return [user, setUser];
  return {
    user,
    handleSignOut,
    signInWithGoogle,
  };
};
export default useFirebase;
