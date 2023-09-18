const requester = async (method, data) => {
    const options = {};
  
    if (method !== "GET") {
      options.method = method;
  
      if (data) {
        options.headers = {
          "content-type": "application/json",
        };
        options.body = JSON.stringify(data);
      }
    }
   
    const serializedAuth = localStorage.getItem("authorization");
  
    if (serializedAuth) {
      const authorizaion = JSON.parse(serializedAuth);
  
      if (authorizaion.accessToken) {
        options.headers = {
          ...options.headers,
          "X-Authorization": authorizaion.accessToken,
        };
      }
    }
  
    const response = await fetch(options);
  
    if (response.status === 204) {
      return {};
    }
  
    const result = await response.json();
  
    if (!response.ok) {
      throw result;
    }
  
    return result;
  };
  
  export const requestFactory = () => {
    return {
      get: requester.bind(null, "GET"),
      put: requester.bind(null, "PUT"),
      post: requester.bind(null, "POST"),
      patch: requester.bind(null, "PATCH"),
      delete: requester.bind(null, "DELETE"),
    };
  };