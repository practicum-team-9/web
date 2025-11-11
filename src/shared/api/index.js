import axios from "axios";

const BASE_URL = "https://foodgramproject.duckdns.org";

const makeRequest = (url, method, data) => {
  return axios({
    url: BASE_URL + url,
    method: method,
    data: data,
  });
};

const makeRequestWithToken = (url, method, data) => {
  const token = localStorage.getItem("token");

  return axios({
    url: BASE_URL + url,
    method: method,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

const getForms = (search = "") => {
  return makeRequest(
    `/v1/forms/get-all-forms/${search ? `?search=${search}` : ""}`,
    "GET"
  );
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

const loginUser = (username, password) => {
  return makeRequest(
      `/v1/auth/login`,
      "POST",
      { username, password }
  );
};

const checkToken = () => {
  return makeRequestWithToken("/v1/auth/token", "GET"); //TODO прерделать путь и логику когда будет ответ от Ильи
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
