import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import Constants from 'expo-constants';

/**
 * Base URL definida via app.config.ts ou eas.json
 * fallback para desenvolvimento local
 */
const BASE_URL =
  Constants.expoConfig?.extra?.apiUrl ||
  'http://localhost:3000';

/**
 * Instância principal do Axios
 */
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Interceptor de Request
 * Aqui você pode injetar token futuramente
 */
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // Exemplo futuro:
    // const token = await getToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor de Response
 * Tratamento global de erro
 */
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error(
        '[API ERROR]',
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error('[API ERROR] No response from server');
    } else {
      console.error('[API ERROR]', error.message);
    }

    return Promise.reject(error);
  }
);
