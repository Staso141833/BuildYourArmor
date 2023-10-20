import jsCookie from "js-cookie";

const SetCookie = (cookiename, userIn) => {
  jsCookie.set(cookiename, userIn, {
    expires: 2,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

export default SetCookie;
