
import React, { Fragment, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import "./style.scss";
// import useRequest from "../../utils/useRequest.tsx";
// import Modal, { ModalInterfaceType } from "../../components/Modal/index.tsx";

// type ResponseType = {
//   message: string;
// };

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("🚀 ~ file: index.tsx:15 ~ Account ~ location:", location)
  const isLoginActivated = location.pathname === '/account/login';
  const loginActiveClass = isLoginActivated ? 'tab-item-active' : '';
  const regsiterActiveClass = !isLoginActivated ? 'tab-item-active' : '';

  // 如果已经登录，自动跳转
  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/home');
    }
  }, [navigate])
  
  return (
    <Fragment>
      <div className="page login-page">
        <div className="tab">
          <div className={`tab-item tab-item-left ${loginActiveClass}`}>
            
            <Link to="/account/login">登录</Link>
          </div>
          <div className={`tab-item tab-item-right ${regsiterActiveClass}`}>
            <Link to="/account/register">注册</Link>
          </div>
        </div>
        <Outlet />
      </div>

      {/* <Modal ref={modalRef} /> */}
    </Fragment>
  );
};
export default Account;
