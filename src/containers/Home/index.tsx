
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.scss';
import { useState } from 'react';
function Home() {
  const [ page, setPage ] = useState(1);

  return (
    <div className="page home-page">
      <div className="banner">
        <h3 className="location">
          <span className="iconfont">&#xe637;</span>
          优果购（南开店）
        </h3>
        <div className="search">
          <span className="iconfont">&#xe651;</span>
          请输入你需要搜索的内容
        </div>
        <div className='swiper-area'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={(e) => setPage(e.activeIndex + 1)}
          >
            <SwiperSlide>
              <div className='swiper-item'>
                <img className='swiper-item-img' src="http://statics.dell-lee.com/shopping/banner.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-item'>
                <img className='swiper-item-img' src="http://statics.dell-lee.com/shopping/banner.png" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="pagination">{page} /2 </div>
        </div>
      </div>
      <div className="category">
        <div className="category-item">
          <img className='category-item-img' src="http://statics.dell-lee.com/shopping/category-1.png" alt="新鲜蔬菜" />
          <p className='category-item-desc'>新鲜蔬菜</p>
        </div>
      </div>
      <div className="card">
        <h3 className="card-title">
          <img className='card-title-img' src="http://statics.dell-lee.com/shopping/hot.png" alt="新品尝鲜" />
          新品尝鲜
          <div className="card-title-more">更多<span className="iconfont">&#xe614;</span></div>
        </h3>
        <div className="card-content">
          <div className="card-content-item">
            <img className='card-content-item-img' src="http://statics.dell-lee.com/shopping/hot.png" alt="" />
            <p className="card-content-item-desc">金锣 国产猪肉 去皮五花肉...</p>
            <p className="card-content-item-price">
              <span className="card-content-item-yen"> &yen;</span>
              66.0
              <div className="iconfont">&#xe606;</div>
            </p>
          </div>
          <div className="card-content-item">
            <img className='card-content-item-img' src="http://statics.dell-lee.com/shopping/hot.png" alt="" />
            <p className="card-content-item-desc">金锣 国产猪肉 去皮五花肉...</p>
            <p className="card-content-item-price">
              <span className="card-content-item-yen"> &yen;</span>
              66.0
              <div className="iconfont">&#xe606;</div>
            </p>
          </div>
          <div className="card-content-item">
            <img className='card-content-item-img' src="http://statics.dell-lee.com/shopping/hot.png" alt="" />
            <p className="card-content-item-desc">金锣 国产猪肉 去皮五花肉...</p>
            <p className="card-content-item-price">
              <span className="card-content-item-yen"> &yen;</span>
              66.0
              <div className="iconfont">&#xe606;</div>
            </p>
          </div>
          <div className="card-content-item">
            <img className='card-content-item-img' src="http://statics.dell-lee.com/shopping/hot.png" alt="" />
            <p className="card-content-item-desc">金锣 国产猪肉 去皮五花肉...</p>
            <p className="card-content-item-price">
              <span className="card-content-item-yen"> &yen;</span>
              66.0
              <div className="iconfont">&#xe606;</div>
            </p>
          </div>
          <div className="card-content-item">
            <img className='card-content-item-img' src="http://statics.dell-lee.com/shopping/hot.png" alt="" />
            <p className="card-content-item-desc">金锣 国产猪肉 去皮五花肉...</p>
            <p className="card-content-item-price">
              <span className="card-content-item-yen"> &yen;</span>
              66.0
              <div className="iconfont">&#xe606;</div>
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;