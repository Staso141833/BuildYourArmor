import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase.js";

export const authServiceFactory = () => {
  const login = async (loginData) => {
    const data = await signInWithEmailAndPassword(loginData);

    return data;
  };

  const register = async (registerData) => {
    const data = await createUserWithEmailAndPassword(registerData);

    return data;
  };

  const logout = () => signOut(auth);
  return {
    login,
    register,
    logout,
  };
};
