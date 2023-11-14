import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BannersType, LocationType } from "../types";

type BannerPropsType = {
  location: LocationType | undefined;
  banners: BannersType | undefined;
};

const Banner = (props: BannerPropsType) => {
  const [page, setPage] = useState(1);
  const { location, banners } = props;
  console.log(location, banners);

  return (
    <div className="banner">
      <h3 className="location">
        <span className="iconfont">&#xe637;</span>
        {location?.address || ""}
      </h3>
      <div className="search">
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
