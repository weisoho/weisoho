import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// 添加请求拦截器
api.interceptors.request.use(
  (config) => {
    console.log('请求配置:', config);
    return config;
  },
  (error) => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
api.interceptors.response.use(
  (response) => {
    return response;
  }, 
  (error) => {
    console.error('响应错误:', error);
    return Promise.reject(error);
  }
);

export const loginAPI = {
  login: (phone: string, password: string) => {
    return api.post('/user/login', { phone, password });
  }
};

export default api;
