import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 

  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");




  const onLoginSubmit = async () => {};

  const onLogout = async () => {};

  const contextValues = {
    
    onLoginSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken
  }

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
}
