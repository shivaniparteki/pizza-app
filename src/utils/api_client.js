import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

export const getPizza = () => {
  const URL = "/Pizza.json";
  //const response = axios.get(URL);
  //axios.post(URL, {userid:'amit'});
  const response = axios({
    method: "GET",
    url: URL,
  });

  return response;
};


// export const getPizza2 = () => {
//   const axiosObject = axios.create({
//     baseURL: 'https://abcd.com'
//   });
//   const response = axiosObject.get('/Pizza.json');
//   return response;
// }

export default getPizza; 
