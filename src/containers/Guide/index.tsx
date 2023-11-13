import React, { useEffect, useRef } from "react";
import "./style.scss";
import {useNavigate} from 'react-router-dom'

const useRefAnimation = () => {
  const ref = useRef<HTMLDivElement>(null!)
  useEffect(() => {
    ref.current.style.opacity = '1';
  }, [])
  return ref;
}

function Guide() {
  const ref = useRefAnimation();

  const navigate = useNavigate();
  function handleIconClick () {
    if(localStorage.getItem('token')){
      navigate('/home');
    }else{
      navigate('/account/login')
    }
  }
  return (
    <div ref={ref} className="page guide-page">
      <img className="main-pic" src={require("../../static/img/halg_logo_icon_@2x.png")} alt="欢乐购" />
      <p className="title">欢乐购</p>
      <img className="sub-pic" src={require("../../static/img/slogn_word_icon_@2x.png")} alt="欢乐购" />
      <div className="iconfont arrow-icon" onClick={handleIconClick}>
        &#xe672;
      </div>
    </div>
  );
}

export default Guide;
