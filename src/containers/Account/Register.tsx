import React, { Fragment, useRef, useState } from "react";
import "./style.scss";
// import Modal, { ModalInterfaceType } from "@/components/Modal/index";
import { message } from "@/utils/message";

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <Fragment>
      <div className="form">
        <div className="form-item">
          <div className="form-item-title">用户名</div>
          <input
            className="form-item-content"
            type="text"
            placeholder="请输入用户名"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-item">
          <div className="form-item-title">手机号</div>
          <input
            className="form-item-content"
            type="text"
            placeholder="请输入手机号"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <div className="form-item">
          <div className="form-item-title">密码</div>
          <input
            className="form-item-content"
            type="passworld"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-item">
          <div className="form-item-title">确认密码</div>
          <input
            className="form-item-content"
            type="passworld"
            placeholder="请再次输入密码"
            value={checkPassword}
            onChange={(e) => {
              setCheckPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="submit">注册</div>
    </Fragment>
  );
};
export default Register;
