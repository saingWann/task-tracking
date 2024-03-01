import axios from "axios";

export const api = axios.create({
    baseURL: 'https://65e2486fa8583365b31816f7.mockapi.io/api/v1/',
    timeout: 1000,
    headers: {'content-type':'application/json'}
  });

  