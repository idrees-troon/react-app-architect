import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Perform any actions before sending the request
    // For example, you can add authentication headers
    // or modify the request data
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    // Process successful responses
    // For example, you can normalize the response data
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default api;


// In this example, the code sets up the base URL and default headers for your API requests. 
//It also adds request and response interceptors to handle any modifications or error handling.