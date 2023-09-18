import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocaleStorage } from "../hooks/useLocalStorage.js";
import { authServiceFactory } from "../services/authService.js";
import { auth } from "../config/firebase.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authorization, setAuthorization] = useLocaleStorage("authorization", {});
  const authService = authServiceFactory(auth?.currentUser?.accessToken);
 
  const onLoginSubmit = async (data) => {
   
    try {
      const result = await authService.login(data);
      console.log(result)
      setAuthorization(result);
      navigate("/catalog");
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const onRegisterSubmit = async (values) => {
    const { rePassword, ...registerData } = values;
    if (rePassword !== registerData.password) {
      throw Error("Passwords do not match!");
    }

    try {
      const result = await authService.register(registerData);
      setAuthorization(result);
      navigate("/catalog");
    } catch (error) {
      console.log(`There is a problem ${error}`);
    }
  };

  const onLogout = async (successCallback) => {
    try {
      await authService.logout();
      successCallback();
      setAuthorization({});
      navigate("/home");
    } catch (error) {
      console.log(`There is a problem ${error}`);
    }
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout: authorization._id,
    token: authorization.accessToken,
    userEmail: authorization.email,
    isAuthenticated: !!authorization.accessToken,
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
