import axios from 'axios'

const service = axios.create({
    baseURL: 'http://49.234.39.99', // TODO
    timeout: 5000
})

// 请求拦截器，拦截请求前对数据进行处理
service.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      return config;
    },
    (error) => {
      // 在请求发生错误时做些什么
      console.log(error);
      return Promise.reject();
    }
  );
  
  // 响应拦截器，拦截请求后对数据进行处理
  service.interceptors.response.use(
    (response) => {
      // 对响应数据做些什么
      if (response.status === 200) {
        return response.data;
      } else {
        Promise.reject();
      }
    },
    (error) => {
      // 对响应发生错误时做些什么
      console.log(error);
      return Promise.reject();
    }
  );
  
  export default service;