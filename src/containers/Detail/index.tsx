import "./style.scss";
import { ResponseType } from "./types";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useRequest from "@/hooks/useRequest";



const Detail = () => {
  
  return (
    <div className="page detail-page">
      <div className="title">
        <div className="iconfont">&#xe697;</div>
        商品详情
      </div>
      <img className="image" src="http://statics.dell-lee.com/shopping/detail.png" alt=""  />
      <div className="main">
        <div className="main-price"><span className="main-price-yen">&yen;</span>39.9</div>
        <div className="main-sales">已售546</div>
        <div className="main-content">
          <div className="main-content-title">山东海阳普罗wangsi西红柿</div>
          <p className="main-content-subtitle">清脆，爽口</p>
        </div>
      </div>
      <div className="spec">
        <div className="spec-title">产品信息</div>
        <div className="spec-content">
          <div className="spec-content-left">
            <p className="spec-content-item">产地</p>
            <p className="spec-content-item">规格</p>
          </div>
          <div className="spec-content-right">
            <p className="spec-content-item">以实际购买批次为准</p>
            <p className="spec-content-item">2kg</p>
          </div>
        </div>
      </div>
      <div className="detail">
        <div className="detail-title">商品详情</div>
        <div className="detail-content">
          就得啦荆防颗粒电视剧俯卧内容按流程VN拉三等奖佛为UR缇欧恶如对方可理解阿斯利康地方近段时间法律可适当
        </div>
      </div>
      <div className="docker">
        <div className="cart-icon">
          <div className="iconfont">&#xe70b;</div>
          <div className="cart-icon-text">购物车</div>
        </div>
        <div className="cart-button">加入购物车</div>
      </div>
    </div>
  );
};

export default Detail;
