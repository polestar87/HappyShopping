import { useState, useRef } from "react";
import axios, { AxiosRequestConfig, Method } from "axios";

function useRequest<T>(
  option: AxiosRequestConfig
  // url: string, method: Method, payload: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController())

  const cancel = () => {
    controllerRef.current.abort()
  }
  const request = async (requestOptions?: AxiosRequestConfig) => {
    // 清空之前的请求状态和数据
    setData(null)
    setError('')
    setLoaded(false)

    const loginToken = localStorage.getItem('token');
    const headers = loginToken ? { token: loginToken } : {}

    // 发送请求
    return axios.request<T>({
      url: requestOptions?.url || option.url,
      method: requestOptions?.method || option.method,
      signal: controllerRef.current.signal,
      data: requestOptions?.data || option.data,
      params: requestOptions?.params || option.params,
      headers
    }).then(response => {
      setData(response.data);
      return response.data
    }).catch((e: any) => {
      setError(e.message || 'unknow requset error.')
      throw new Error(e);
    }).finally(() => {
      setLoaded(true)
    })

    // } catch (e: any) {

    // } finally{
    //   setLoaded(true)
    // }
  };
  return { data, error, loaded, request, cancel }
}

export default useRequest;
