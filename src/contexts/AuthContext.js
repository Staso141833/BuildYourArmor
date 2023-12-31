import { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useCookie } from "../hooks/useCookie.js";
import { authServiceFactory } from "../services/authService.js";
import { auth } from "../config/firebase.js";
import SetCookie from "../hooks/setCookie.js";
import GetCookie from "../hooks/getCookie.js";
import RemoveCookie from "../hooks/removeCookie.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [newError, setNewError] = useState("");
  const [success, setSuccess] = useState("");
  const [userIn, setUserIn] = useCookie("userIn", {});

  const checkUser = GetCookie("userIn");

  const authService = authServiceFactory();

  const onLoginSubmit = async (values) => {
    const auth = values.auth;
    const loginEmail = values.loginEmail;
    const loginPassword = values.loginPassword;

    try {
      console.log("Get into try!");
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      if (user) {
        RemoveCookie("userIn");
        setUserIn(user);
        //  SetCookie("userIn", JSON.stringify(user));
        setSuccess(true);

        return user;
      }
    } catch (error) {
      console.log(`${error}`);
      if (error.response) {
        console.log(error.response.data.message);
        setNewError(error.response.data.message);
        console.log(error.response.status);
      }
    }
  };

  const onRegisterSubmit = async (values) => {
    const { rePassword, ...registerData } = values;
    if (rePassword !== registerData.password) {
      throw Error("Passwords do not match!");
    }

    try {
      const result = await createUserWithEmailAndPassword(
        registerData.auth,
        registerData.email,
        registerData.password
      );
      RemoveCookie("userIn");
      SetCookie("userIn", JSON.stringify(result));
    } catch (error) {
      console.log(`There is a problem ${error}`);
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUserIn(currentUser);
  });

  const onLogout = async () => {
    try {
      await authService.logout(auth);
      RemoveCookie("userIn");
      setUserIn({});
      //   successCallback();
    } catch (error) {
      console.log(`There is a problem ${error}`);
    }
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userIn,
    setUserIn,
    token: userIn?.stsTokenManager?.accessToken,
    userId: userIn?.uid,
    userEmail: userIn?.email,
    isAuthenticated: !!userIn?.stsTokenManager?.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
