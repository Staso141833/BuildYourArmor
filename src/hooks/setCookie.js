
import jsCookie from "js-cookie";


const SetCookie = (cookiename, usrin) => {
  jsCookie.set(cookiename, usrin, {
    expires: 3,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

export default SetCookie;