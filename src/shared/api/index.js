import axios from "axios";

const BASE_URL = "http://51.250.113.76:8001";

// temp. will be moved to auth form
const LOGIN = "admin";
const PASSWORD = "admin";

const makeRequest = (url, method, data) => {
  return axios({
    url: BASE_URL + url,
    method: method,
    data: data,
  });
};

const getForms = (search = "") => {
  return makeRequest(
    `/v1/forms/get-all-forms/${search ? `?search=${search}` : ""}`,
    "GET"
  );
};

const addForm = (form) => {
  return makeRequest("/v1/forms/add-form/", "POST", form);
};

const deleteForm = (id) => {
  return makeRequest(`/v1/forms/delete-form/${id}`, "DELETE");
};

const updateForm = (id, form) => {
  return makeRequest(`/v1/forms/update-form/${id}`, "PUT", form);
};

const getFormById = (id) => {
  return makeRequest(`/v1/forms/get-form/${id}`, "GET");
};

export const api = {
  getFormById,
  getForms,
  addForm,
  deleteForm,
  updateForm,
};
