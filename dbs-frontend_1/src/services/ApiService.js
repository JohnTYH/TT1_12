import axios from "axios";

const apiInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' }
});

apiInstance.interceptors.request.use(config => {
  if (!!sessionStorage.getItem('token')) {
    config.headers['token'] = JSON.parse(sessionStorage.getItem('token'));
  }
  return config;
})

export class ApiService {
  async get(url) {
    try {
      const { data } = await apiInstance.get(url);
      return data;
    } catch (err) {
      throw err.response.data.error;
    }
  }

  async post(url, req) {
    try {
      const { data } = await apiInstance.post(url, req);
      return data;
    } catch (err) {
      throw err.response.data.error;
    }
  }

  async put(url, req) {
    try {
      const { data } = await apiInstance.put(url, req);
      return data;
    } catch (err) {
      throw err.response.data.error;
    }
  }
}
