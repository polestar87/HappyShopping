import "swiper/css";
import "./style.scss";
import { ResponseType } from "./types";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useRequest from "@/hooks/useRequest";
import Banner from "./components/Banner";
import Categories from "./components/Categories";

const defaultRequestData = {
  url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/home",
  method: "get",
  manual: true,
};
function Home() {
  const [requestData, setRequestData] = useState(defaultRequestData);
  const { data } = useRequest<ResponseType>(requestData);
  console.log("data", data);

  const [page, setPage] = useState(1);

  return (
    <div className="page home-page">
      <Banner 
        location={data?.data.location} 
        banners={data?.data.banners} 
      />
     <Categories categories={data?.data.categories} />

      <div className="card">
        <h3 className="card-title">
          <img
            className="card-title-img"
            src="http://statics.dell-lee.com/shopping/hot.png"
            alt="新品尝鲜"
          />
          新品尝鲜
          <div className="card-title-more">
            更多<span className="iconfont">&#xe614;</span>
          </div>
        </h3>
        <div className="card-content">
          {(data?.data.freshes || []).map((item) => {
            return (
              <div className="card-content-item">
                <img
                  className="card-content-item-img"
                  src={item.imgUrl}
                  alt={item.name}
                />
                <p className="card-content-item-desc">{item.name}</p>
                <div className="card-content-item-price">
                  <span className="card-content-item-yen"> &yen;</span>
                  {Number(item.price).toFixed(2)}
                  <div className="iconfont">&#xe606;</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bottom">- 我是有底线的 -</div>
      <div className="docker">
        <div className="docker-item docker-item-active">
          <p className="iconfont docker-item-icon">&#xe6b8;</p>
          <p className="docker-item-title">首页</p>
        </div>
        <div className="docker-item">
          <p className="iconfont docker-item-icon">&#xe63d;</p>
          <p className="docker-item-title">分类</p>
        </div>
        <div className="docker-item">
          <p className="iconfont docker-item-icon">&#xe70b;</p>
          <p className="docker-item-title">购物车</p>
        </div>
        <div className="docker-item">
          <p className="iconfont docker-item-icon">&#xe607;</p>
          <p className="docker-item-title">我的</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
