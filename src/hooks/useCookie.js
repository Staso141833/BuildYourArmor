import { useState } from "react";
import GetCookie from "./getCookie.js";
import SetCookie from "./setCookie.js";

export const useCookie = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const persistedStateSerialized = GetCookie("userIn");

    if (persistedStateSerialized) {
      const persistedState = JSON.parse(persistedStateSerialized);

      return persistedState;
    }
    return initialValue;
  });

  const setCookieState = (value) => {
    SetCookie(key, JSON.stringify(value));
    setState(value);
  };
  return [state, setCookieState];
};
