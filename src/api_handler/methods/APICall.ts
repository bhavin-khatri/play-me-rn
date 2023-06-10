import APIService, {SuccessResponseModel} from './APIService';

interface BasicAPIConfig {
  baseURL?: string;
  endPoint: string;
  token?:any;
}

interface GETAPIConfig {
  params?: any;
}

interface PUTAPIConfig {
  data?: any;
}

export const GET = async (
  config: BasicAPIConfig,
  payload: GETAPIConfig = {},
  onData: (data: SuccessResponseModel) => void,
  onError: (error: any) => void,
) => {
  await APIService(
    {
      ...config,
      method: 'get',
    },
    {params: payload.params},
    async data => {
      onData(data);
    },
    error => {
      onError(error);
    },
  );
};

export const POST = async (
  config: BasicAPIConfig,
  payload: any,
  onSuccess: (data: SuccessResponseModel) => void,
  onFailure: (error: any) => void,
) => {
  await APIService(
    {
      ...config,
      method: 'post',
    },
    {data: payload},
    data => {
      onSuccess(data);
    },
    error => {
      onFailure(error);
    },
  );
};

export const PUT = async (
  config: BasicAPIConfig,
  payload: PUTAPIConfig,
  onSuccess: (data: SuccessResponseModel) => void,
  onFailure: (error: any) => void,
) => {
  await APIService(
    {
      ...config,
      method: 'put',
    },
    {
      data: payload.data,
    },
    data => {
      onSuccess(data);
    },
    error => {
      onFailure(error);
    },
  );
};

export const DELETE = async (
  config: BasicAPIConfig,
  payload: PUTAPIConfig,
  onSuccess: (data: SuccessResponseModel) => void,
  onFailure: (error: any) => void,
) => {
  await APIService(
    {
      ...config,
      method: 'delete',
    },
    {
      data: payload,
    },
    data => {
      onSuccess(data);
    },
    error => {
      onFailure(error);
    },
  );
};
