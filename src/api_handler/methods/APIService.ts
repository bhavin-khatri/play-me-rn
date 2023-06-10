import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const METHOD = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch',
};
type METHOD_TYPE = 'post' | 'get' | 'put' | 'delete' | 'patch';

export interface API_CONFIG {
  baseURL?: string;
  endPoint: string;
  method?: METHOD_TYPE;
  headers?: any;
  token?: string;

  forceLive?: boolean;
  timeout?: number;
  headersFlutterWave?: any;
}

export interface API_PAYLOAD {
  params?: any;
  data?: any;
}

interface BasicResponseModel {
  success: number;
  error?: Array<string>;
  data?: any;
}

export interface SuccessResponseModel {
  success: boolean;
  message?: string;
  data?: any;
}

export default async (
  apiConfig: API_CONFIG,
  apiPayload: API_PAYLOAD,
  onSuccess: (res: SuccessResponseModel) => void,
  onFailure: (error: any) => void,
) => {
  const method: METHOD_TYPE = apiConfig.method || 'get';

  const token = apiConfig?.token;
  const requestId = new Date().getTime();
  const data: any = apiPayload.data;

  let params: any = apiPayload.params || {};

  const endPoint: string = `${apiConfig.baseURL + apiConfig.endPoint}`;

  let headers: any = {
    RequestID: requestId,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (apiConfig.headers) {
    headers = {...headers, ...apiConfig.headers};
  }

  let config: AxiosRequestConfig = {
    baseURL: endPoint,
    timeout: apiConfig.timeout || 6000000000,
    headers: headers,
  };

  console.log('\n___________payload__________________', data);
  console.log('\n___________params__________________', params);
  console.log('\n___________config__________________', config);
  console.log('\n___________endPoint__________________', endPoint);
  console.log('\n___________method__________________', method);

  let request: Promise<any>;

  switch (method) {
    case METHOD.POST:
      request = axios.post(endPoint, data, config);
      // if (apiConfig.endPoint == API_ENDPOINTS.AUTH_DOCKER.LOGIN_WITH_PIN) {
      // console.log("REQUEST CONFIG ==> ", config);
      // console.log("REQUEST PAYLOAD ==> ", data);
      // request.then(data => {
      //   console.log("REQUEST ==> ", data);
      // });
      // }
      break;
    case METHOD.GET:
      config = {...config, params};
      request = axios.get(endPoint, config);
      // console.log("REQUEST CONFIG ==> ", config);
      // console.log("REQUEST PAYLOAD ==> ", data);
      // request.then(data => {
      //   console.log("REQUEST ==> ", data);
      // });
      break;
    case METHOD.DELETE:
      config = {...config, params};
      request = axios.delete(endPoint, config);
      break;
    case METHOD.PUT:
      request = axios.put(endPoint, data, config);
      break;
    case METHOD.PATCH:
      request = axios.patch(endPoint, data, config);
      break;

    default:
      config = {...config, params};
      request = axios.get(endPoint, config);
      break;
  }

  await request
    .then(async (response: AxiosResponse) => {
      console.log('\n___________success__________________', {
        response: response?.data,
        status: response?.status,
        config: response?.config,
      });
      if (response!==null) {
        const status: number = response.status;
        switch (status) {
          case 200:
            const responseData: BasicResponseModel = response.data;

            if (response.data) {
              onSuccess({
                data: responseData,
                // message: successMessage,
                success: true,
              });
            } else {
              const error: any =
                response.data.message ||
                (response.data.error && response.data.error[0]);

              onFailure({
                errorMessage: error,
                errorCode: response.data.error_code,
                success: false,
              });
            }
            break;

          case 401:
            // AlertDialog.show({
            //     title: strings.CUSTOMER_APP_SESSION,
            //     message: strings.CUSTOMER_APP_SESSION_EXPIRE_RELOGIN,
            //     positiveButton: {
            //         title: strings.Relogin,
            //         onPress: async () => {
            //             AlertDialog.hide();
            //             await setIsLoggedIn(false);
            //             store.dispatch({
            //                 type: HOME_LOGOUT,
            //             });
            //             resetNavigation("splash");
            //         },
            //     },
            // });
            break;

          default:
            onFailure({
              errorMessage: 'SOMETHING_WENT_WRONG',
              errorCode: 0,
            });
        }
      } else {
        onFailure({
          errorMessage: 'SOMETHING_WENT_WRONG',
          errorCode: 0,
        });
      }
    })
    .catch(error => {
      console.log('\n___________error__________________', error);
      if (error) {
        console.log('\n___________error__________________', error?.response);
        if (error?.response) {
          console.log(
            '\n___________error__________________',
            error?.response?.status,
          );
          switch (error?.response?.status) {
            case 401:
              // AlertDialog.show({
              //     title: strings.SESSION,
              //     message: strings.SESSION_EXPIRE_RELOGIN,
              //     positiveButton: {response
              //         title: strings.Relogin,
              //         onPress: async () => {
              //             AlertDialog.hide();
              //             await setIsLoggedIn(false);
              //             store.dispatch({
              //                 type: HOME_LOGOUT,
              //             });
              //             resetNavigation("splash");
              //         },
              //     },
              // });
              onFailure({
                errorMessage: 'SOMETHING_WENT_WRONG',
                errorCode: 401,
              });

              break;
            default:
              onFailure({
                errorMessage: 'SOMETHING_WENT_WRONG',
                errorCode: 0,
              });
              break;
          }
        } else if (error?.message) {
          onFailure({
            errorMessage: 'SOMETHING_WENT_WRONG',
            errorCode: 0,
          });
        } else {
          onFailure({
            errorMessage: 'SOMETHING_WENT_WRONG',
            errorCode: 0,
          });
        }
      } else {
        onFailure({
          errorMessage: 'SOMETHING_WENT_WRONG',
          errorCode: 0,
        });
      }
    });
};
