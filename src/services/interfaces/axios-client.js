import axios from 'axios';
import { toast } from 'react-toastify';
import { store } from '../../redux/store';
import { setLoading } from '../../redux/features/loadingSlice';

const axiosClient = axios.create({
  baseURL: 'https://reqres.in/api', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const notify = (message, toastId) => {
  toast.error(message, {
    autoClose: 2000,
    toastId
  });
};

const errorHandler = (error) => {
  // eslint-disable-next-line default-case
  switch (error?.status || error.response.status) {
    case 200:
      if (error?.response?.status === 400) {
        toast.error(error?.response?.data?.error);
        return;
      }
      break;
    case 400:
      if (error) {
        toast.error(
          error?.response?.data?.error
            ? error?.response?.data?.error
            : error?.response?.data?.message?.message
            ? error?.response?.data?.message?.message
            : error?.response?.data?.message
        );
        return;
      }
      break;
    case 401:
      notify(error?.response?.data?.message, error.toString());
      break;
    case 403:
      notify(error?.response?.data?.message, error.toString());
      break;
    case 404:
      toast.error(error?.response?.statusText);
      break;
    case 415:
      toast.error(error?.response?.statusText);
      break;
    case 500:
      toast.error('Internal Server Error');
      break;
  }
};

// Request Interceptor
axiosClient.interceptors.request.use(
  (config) => {
    store.dispatch(setLoading(true));
    // const jwt = store.getState()?.auth?.user?.data?.token;
    // config.headers.Authorization = jwt ? `Bearer ${jwt}` : '';

    // Perform any actions before sending the request
    // For example, you can add authentication headers
    // or modify the request data

    console.log("request")


    return config;
  },
  (error) => {
    store.dispatch(setLoading(false));
    // Handle request error
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response) => {
    store.dispatch(setLoading(false));
    console.log("response")
    // Process successful responses
    // For example, you can normalize the response data
    errorHandler(response);
    return response;
  },
  (error) => {
    store.dispatch(setLoading(false));
    // Handle response error
    errorHandler(error);
    return Promise.reject(error);
  }
);




export default axiosClient;
// export { axiosClient };


// In this example, the code sets up the base URL and default headers for your API requests. 
//It also adds request and response interceptors to handle any modifications or error handling.