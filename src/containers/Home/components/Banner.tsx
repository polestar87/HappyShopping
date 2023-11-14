import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BannersType, LocationType } from "../types";
import { useNavigate } from "react-router-dom";

type BannerPropsType = {
  location: LocationType | undefined;
  banners: BannersType | undefined;
};

const Banner = (props: BannerPropsType) => {
  const [page, setPage] = useState(1);
  const { location, banners } = props;
  const navigate= useNavigate();
  function handleLocationClick(){
    navigate('/nearby')
  }
  function handleSearchClick(){
    navigate('/search')
  }
  
  return (
    <div className="banner">
      <h3 className="location" onClick={handleLocationClick}>
        <span className="iconfont">&#xe637;</span>
        {location?.address || ""}
      </h3>
      <div className="search" onClick={handleSearchClick}>
        <span className="iconfont">&#xe651;</span>
        请输入你需要搜索的内容
      </div>
      <div className="swiper-area">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(e) => setPage(e.activeIndex + 1)}
        >
          {(banners || []).map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="swiper-item">
                  <img className="swiper-item-img" src={item.url} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="pagination">
          {page} /{banners?.length || 0}
        </div>
      </div>
    </div>
  );
};

export default Banner;
