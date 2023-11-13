import React, { Fragment, useRef, useState } from "react";
import "./style.scss";
import useRequest from "@/hooks/useRequest";
import {message} from "@/utils/message";

import {useNavigate} from 'react-router-dom'

type ResponseType = {
  data: {
    message: string;
    token: string;
  }
};

const Login = () => {

  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  // const modalRef = useRef<ModalInterfaceType>(null);

  const { request } = useRequest<ResponseType>({});
  function handleSubmitBtnClick() {
    if (!phoneNumber) {
      message("手机号不能为空！");
      return;
    }
    if (!password) {
      message("密码不能为空！");
      return;
    }

    request({
      url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/login",
      method: "post",
      data: {
        name: "111",
      },
    })
      .then((res) => {
        console.log("🚀 ~ file: index.tsx:20 ~ request ~ res:", res);
        const { token } = res.data;
        message(res.data.message)
        if(token){
          localStorage.setItem('token', token)
        }
        navigate('/home');
      })
      .catch((error) => {
        message("未知错误");
      });
  }
 
  return (
    <Fragment>
      <div className="form">
        <div className="form-item">
          <div className="form-item-title">手机号</div>
          <input
            className="form-item-content"
            type="text"
            placeholder="请输入手机号码"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <div className="form-item">
          <div className="form-item-title">密 码</div>
          <input
            className="form-item-content"
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="submit" onClick={handleSubmitBtnClick}>
        登录
      </div>
      <p className="notice">*登录即表示您赞同使用条款及隐私政策</p>
    </Fragment>
  );
};
export default Login;
