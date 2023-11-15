import useRequest from "@/hooks/useRequest";
import "./style.scss";
import type { ResponseType } from "./types";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function SearchList() {
  const params = useParams<{ shopId: string; keyword: string }>();

  const [keyword, setKeyword] = useState(params.keyword);
  const [tabValue, setTabValue] = useState("default");

  const [requestData, setRequestData] = useState({
    url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/searchList",
    method: "GET",
    params: {
      keyword,
      shopId: params.shopId,
      type: tabValue,
    },
    manual: true,
  });
  const { data } = useRequest<ResponseType>(requestData);
  console.log("*********", data);
  const list = data?.data || [];

  function handleKeyDown(key: string) {
    if (key === "Enter" && keyword) {
      const newData = { ...requestData };
      newData.params.keyword = keyword;
      setRequestData(newData);
    }
  }
  function handleClick(value: string) {
    setTabValue(value);
    const newData = { ...requestData };
    newData.params.type = value;
    setRequestData(newData);
  }
  return (
    <div className="page search-list-page">
      <div className="search">
        <Link to={`/search/${params.shopId}`}>
          <div className="search-back iconfont">&#xe697;</div>
        </Link>
        <div className="search-area">
          <div className="search-icon iconfont">&#xe651;</div>
          <input
            type="text"
            className="search-input"
            placeholder="请输入商品名称"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e.key)}
          />
          <div
            className="search-clear iconfont"
            onClick={(e) => setKeyword("")}
          >
            &#xe616;
          </div>
        </div>
      </div>
      <div className="search-tab">
        <div
          className={
            tabValue === "default"
              ? "search-tab-item search-tab-item-active"
              : "search-tab-item"
          }
          onClick={() => handleClick("default")}
        >
          默认
        </div>
        <div
          className={
            tabValue === "sales"
              ? "search-tab-item search-tab-item-active"
              : "search-tab-item"
          }
          onClick={() => handleClick("sales")}
        >
          销量
        </div>
        <div
          className={
            tabValue === "price"
              ? "search-tab-item search-tab-item-active"
              : "search-tab-item"
          }
          onClick={() => handleClick("price")}
        >
          价格
        </div>
      </div>
      <div className="list">
        {list.map((item) => {
          return (
            <Link to={`/detail/${item.id}`}>
              <div className="item" key={item.id}>
                <img className="item-img" src={item.imgUrl} alt="" />
                <div className="item-content">
                  <p className="item-title">{item.title}</p>
                  <div className="item-price">
                    <span className="item-price-yen">&yen;</span>
                    {item.price}
                  </div>
                  <div className="item-sales">已售{item.sales}</div>
                </div>
              </div>
              </Link>
          );
        })}
      </div>
      <div className="bottom">- 我是有底线的 -</div>
    </div>
  );
}

export default SearchList;
