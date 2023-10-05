import axios from "axios";
function loadInterceptors() {
  axios.interceptors.request.use((request) => {
    // axios.defaults.headers.common["Authorization"] = "A1111";
    // const cloneRequest = {...request};
    // cloneRequest.headers['mydata'] = "A1111";
    // return cloneRequest;   
    console.log("Interceptor Running...");
    return request;
  });

}
export default loadInterceptors;
