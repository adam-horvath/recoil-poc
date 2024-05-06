import axios, { AxiosRequestConfig } from 'axios';

import { GO_REST_API_BASE_URL, goRestToken } from 'config/constants';

export enum Methods {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export enum Status {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

export enum ApiBase {
  VITE_GO_REST_API_BASE = 'VITE_GO_REST_API_BASE',
}

const ApiBases: { [key: string]: string | undefined } = {
  [ApiBase.VITE_GO_REST_API_BASE]: GO_REST_API_BASE_URL,
};

export interface RequestConfig extends AxiosRequestConfig {
  resource: string;
  method?: Methods;
  useApi?: ApiBase;
}

export const axiosInstance = axios.create({});

interface GenerateUrlSettings {
  baseURL?: string;
  resource?: string;
  params?: Record<string, any>;
  useApi?: ApiBase;
}

export function generateUrl({ resource = '', useApi = ApiBase.VITE_GO_REST_API_BASE }: GenerateUrlSettings = {}) {
  const resourceWithSlash = resource && !resource?.startsWith('/') ? `/${resource}` : resource;
  return `${ApiBases[useApi] ?? ''}${resourceWithSlash}`;
}

async function request<T = void>({ resource, method = Methods.GET, useApi, params, ...reqConfig }: RequestConfig) {
  const url = generateUrl({
    resource,
    useApi,
  });

  const requestParams = { ...params };

  const requestConfig = {
    method,
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${goRestToken}`,
    },
    params: requestParams,
    ...reqConfig,
  };

  const { data } = await axiosInstance.request<T>(requestConfig);

  return data;
}

export default request;
