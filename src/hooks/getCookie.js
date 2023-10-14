import jsCookie from "js-cookie";

const GetCookie = (cookiename) => {
  return jsCookie.get(cookiename);
};

export default GetCookie;
