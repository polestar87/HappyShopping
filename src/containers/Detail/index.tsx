import "./style.scss";
import { ResponseType } from "./types";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useRequest from "@/hooks/useRequest";
import Popver from "@/components/Popover";

const requestData = {
  url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/detail",
  method: "GET",
  params: {
    id: "",
  },
  manual: true,
};
const Detail = () => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  const params = useParams<{ id: string }>();
  requestData.params.id = params?.id;
  const { data } = useRequest<ResponseType>(requestData);
  const result = data?.data;
  console.log(data);

  return (
    <div className="page detail-page">
      <div className="title">
        <div
          className="iconfont"
          onClick={() => {
            navigate(-1);
          }}
        >
          &#xe697;
        </div>
        商品详情
      </div>
      <img className="image" src={result?.imgUrl} alt="" />
      <div className="main">
        <div className="main-price">
          <span className="main-price-yen">&yen;</span>
          {result?.price}
        </div>
        <div className="main-sales">已售{result?.sales}</div>
        <div className="main-content">
          <div className="main-content-title">{result?.title}</div>
          <p className="main-content-subtitle">{result?.subtitle}</p>
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
            <p className="spec-content-item">{result?.origin}</p>
            <p className="spec-content-item">{result?.specification}</p>
          </div>
        </div>
      </div>
      <div className="detail">
        <div className="detail-title">商品详情</div>
        <div className="detail-content">{result?.detail}</div>
      </div>
      <div className="docker">
        <div className="cart-icon">
          <div className="iconfont">&#xe70b;</div>
          <div className="cart-icon-text">购物车</div>
        </div>
        <div className="cart-button"
          onClick={() => setShowCart(true)}
        >加入购物车</div>
      </div>
      <Popver show={showCart} blankClickCallback={()=> {setShowCart(false)}} >
        <div className="cart">
          <div className="cart-content">
            <img className="cart-content-img" src={result?.imgUrl} alt="详情"></img>

            <div className="cart-content-info">
              <div className="cart-content-title">{result?.title}</div>
              <div className="cart-content-price">
                <span className="cart-content-price-yen">&yen;</span>
                {result?.price}
              </div>
            </div>
          </div>
          <div className="cart-count">
            <div className="cart-count-content">
              购买数量
              <div className="cart-count-counter">
                <div className="cart-count-button">-</div>
                <div className="cart-count-text">18</div>
                <div className="cart-count-button">+</div>
              </div>
            </div>
          </div>
          <div className="cart-button">加入购物车</div>
        </div>
      </Popver>
    </div>
  );
};

export default Detail;
