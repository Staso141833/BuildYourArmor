import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocaleStorage } from "../hooks/useLocalStorage.js";
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

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [newError, setNewError] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState({});

  const checkUser = GetCookie("usrin");

  const [userIn, setUserIn] = useState(
    checkUser === undefined ? {} : JSON.stringify(checkUser)
  );

  const authService = authServiceFactory();

  const onLoginSubmit = async (values) => {
    console.log(values)
    try {
      console.log("Get into try!")
      const result = await signInWithEmailAndPassword(values);
      console.log(result)
      if (result) {
        console.log(result);
        RemoveCookie("usrin");
        SetCookie("usrin", JSON.stringify(result));
        setSuccess(true);
        setUserIn(result);
        navigate("/catalog");
        // return result;
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
      RemoveCookie("usrin");
      SetCookie("usrin", JSON.stringify(result));
      navigate("/catalog");
    } catch (error) {
      console.log(`There is a problem ${error}`);
    }
  };

  const onLogout = async () => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    try {
      await authService.logout();
      RemoveCookie("usrin");
      setUserIn({});
      //   successCallback();

      navigate("/home");
    } catch (error) {
      console.log(`There is a problem ${error}`);
    }
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    token: "",
    userEmail: "",
    isAuthenticated: "",
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
