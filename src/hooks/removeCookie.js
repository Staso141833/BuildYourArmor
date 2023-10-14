import jsCookie from "js-cookie";

const RemoveCookie = (cookiename) => {
  return jsCookie.remove(cookiename);
};

export default RemoveCookie;
