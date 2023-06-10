import {GET, POST} from './APICall';
import {RequestModel} from '../models/request_models/RequestModel';
import {
  BASE_URL,
  EVENT_LISTER,
  TOKEN,
  USER_DOCKER,
} from '../../constants/ApiConstants';

export interface LoginPayload {
  email: string;
  password: string;
}
export const login = async (
  payload: LoginPayload,
  onData: (data: any) => void,
  onError: (error: any) => void,
) => {
  await POST(
    {
      baseURL: BASE_URL,
      endPoint: USER_DOCKER.LOGIN,
    },
    payload,
    response => {
      onData(response?.data.data);
    },
    error => {
      onError(error);
    },
  );
};

export const eventListening = async (
  payload: any,
  onData: (data: any) => void,
  onError: (error: any) => void,
) => {
  await POST(
    {
      baseURL: BASE_URL,
      endPoint: EVENT_LISTER.EVENT_LISTENING,
      token: TOKEN,
    },
    payload,
    response => {
      onData(response?.data);
    },
    error => {
      onError(error);
    },
  );
};
