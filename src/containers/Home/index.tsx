import "swiper/css";
import "./style.scss";
import { ResponseType } from "./types";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useRequest from "@/hooks/useRequest";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Card from "./components/Card";

const defaultRequestData = {
  url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/home",
  method: "get",
  manual: true,
};
function Home() {
  const [requestData, setRequestData] = useState(defaultRequestData);
  const { data } = useRequest<ResponseType>(requestData);
  
  return (
    <div className="page home-page">
      <Banner location={data?.data.location} banners={data?.data.banners} />
      <Categories categories={data?.data.categories} />

      <Card title="新品尝鲜" list={data?.data.freshes} />
      <Card title="限时抢购" list={data?.data.freshes} />

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
