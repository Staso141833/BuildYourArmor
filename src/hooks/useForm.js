import { useState } from "react";
import { auth } from "../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useForm = (initialValues, createUserWithEmailAndPassword) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    

    createUserWithEmailAndPassword(auth,email, password)

      // const signIn = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

    setValues(initialValues);
  };

  const changeValues = (newValues) => {
    setValues(newValues);
  };

  return {
    values,
    changeHandler,
    onSubmit,
    changeValues,
  };
};
