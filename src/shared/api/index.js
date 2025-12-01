// import { Password } from "@mui/icons-material";
import axios from "axios";

// import AxiosMockAdapter from 'axios-mock-adapter';
//Mock adapter

// This sets the mock adapter on the default instance
// const mock = new AxiosMockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
//mock.onGet(BASE_URL+'/v1/forms/get-all-forms/').reply(200, {

// const mockToken = 'MOCK TOKEN!'

// mock.onGet(BASE_URL+'/v1/forms/get-all-forms').reply(200, [
//   { id: '683ea0c790fa7b3a18f38e98', name: "Заявка на содействие в трудоустройстве" }, 
//   { id: '6867a04949af470015909103', name: "Консультация по трудоустройству" }
// ]);

// mock.onPost(BASE_URL + '/v1/auth/login', {username: 'username', password: 'password' }).reply(200, {'access_token': mockToken, 'token_type': 'Bearer'})

// mock.onGet(BASE_URL + "/v1/auth/token").reply((config) => {
//     const authHeader = config.headers.Authorization;
    
//     if (authHeader && authHeader.startsWith('Bearer ')) {
//         const token = authHeader.substring(7);
//         if (token === mockToken) {
//             return [200, { valid: true}];
//         } else {
//             return [403, { message: 'Invalid token' }];
//         }
//     } else {
//         return [401, { message: 'Authorization header missing or malformed' }];
//     }

// })

const makeRequest = (url, method, data) => {
  return axios({
    url: import.meta.env.VITE_BASE_URL + url,
    method: method,
    data: data,
  });
};

const makeRequestWithToken = (url, method, data) => {
  const token = localStorage.getItem("token");

  return axios({
    url: import.meta.env.VITE_BASE_URL + url,
    method: method,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

const getForms = () => {
  return makeRequest('/v1/forms/get-all-forms/', 'GET');
};

const addForm = (form) => {
  return makeRequestWithToken("/v1/forms/add-form/", "POST", form);
};

const deleteForm = (id) => {
  return makeRequestWithToken(`/v1/forms/delete-form/${id}`, "DELETE");
};

const updateForm = (id, form) => {
  return makeRequestWithToken(`/v1/forms/update-form/${id}`, "PUT", form);
};

const getFormById = (id) => {
  return makeRequest(`/v1/forms/get-form/${id}`, "GET");
};

const loginUser = (data) => {
  return makeRequest(
      `/v1/auth/login`,
      "POST",
      data
  );
};

const checkToken = () => {
  return makeRequestWithToken("/v1/auth/check_token/", "GET");
};

export const api = {
  getFormById,
  getForms,
  addForm,
  deleteForm,
  updateForm,
  loginUser,
  checkToken
};
