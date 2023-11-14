import { useState, useRef, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig, Method } from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "@/utils/message";

function useRequest<T>(option: AxiosRequestConfig & {manual?: boolean}) {
  const navigate = useNavigate();
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController());

  const cancel = () => {
    controllerRef.current.abort();
  };
  const request = useCallback((requestOptions?: AxiosRequestConfig) => {
    // 清空之前的请求状态和数据
    setData(null);
    setError("");
    setLoaded(false);

    const loginToken = localStorage.getItem("token");
    const headers = loginToken ? { token: loginToken } : {};

    // 发送请求
    return axios
      .request<T>({
        url: requestOptions?.url,
        method: requestOptions?.method,
        signal: controllerRef.current.signal,
        data: requestOptions?.data,
        params: requestOptions?.params,
        headers,
      })
      .then((response) => {
        setData(response.data);
        return response.data;
      })
      .catch((e: any) => {
        if (e?.response?.status === 403) {
          localStorage.removeItem("token");
          navigate("/login");
        }
        setError(e.message || "unknow requset error.");
        throw new Error(e);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, [navigate]);
  useEffect(() => {
    if(option.manual){
      request(option).catch(e => {
        message(e.message)
      });
    }
  }, [option]);
  return { data, error, loaded, request, cancel };
}

export default useRequest;
