import axios, { AxiosResponse } from 'axios';
import { setTimeout } from 'timers';

// axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) => {
  return new Promise<AxiosResponse>(resolve =>
    setTimeout(() => resolve(response), ms)
  );
};

const requests = {
  get: (url: string) =>
    axios
      .get(url)
      .then(responseBody),
  post: (url: string, body: {}) =>
    axios
      .post(url, body)
      .then(responseBody),
  put: (url: string, body: {}) =>
    axios
      .put(url, body)
      .then(responseBody),
  delete: (url: string) =>
    axios
      .delete(url)
      .then(responseBody)
};

export default requests;
