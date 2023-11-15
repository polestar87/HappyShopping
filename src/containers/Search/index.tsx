import "./style.scss";
import { ResponseType } from "./types";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useRequest from "@/hooks/useRequest";

const defaultRequestData = {
  url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/hostSearch",
  method: "get",
  manual: true,
  params: {
    shopId: "",
  },
};

const Search = () => {
  const navigate = useNavigate();
  const localSearchList = localStorage.getItem("search-list");
  const searchListHistory: string[] = localSearchList
    ? JSON.parse(localSearchList)
    : [];
  const [keyword, setKeyword] = useState("");
  const [historyList, setHistotyList] = useState(searchListHistory);

  const param = useParams<{ shopId: string }>();
  if (param.shopId) {
    defaultRequestData.params.shopId = param.shopId;
  }

  const { data } = useRequest<ResponseType>(defaultRequestData);
  const hostList = data?.data;

  function handleKeyDown(key: string) {
    if (key === "Enter" && keyword) {
      const keywordIndex = historyList.findIndex((item) => item === keyword);

      const newHistoryList = [...historyList];
      if (keywordIndex > -1) {
        newHistoryList.splice(keywordIndex, 1);
      }
      newHistoryList.unshift(keyword);

      if (newHistoryList.length > 20) {
        newHistoryList.length = 20;
      }
      setHistotyList(newHistoryList);
      localStorage.setItem("search-list", JSON.stringify(newHistoryList));
      setKeyword("");
      navigate(`/searchList/${param.shopId}/${keyword}`);
    }
  }
  function handleClean() {
    setHistotyList([]);
    localStorage.removeItem("search-list");
  }
  function handleKeywordClick(item:string) {
    navigate(`/searchList/${param.shopId}/${item}`);
  }
  return (
    <div className="page search-page">
      <div className="search">
        <Link to="/home">
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
        </div>
      </div>
      {historyList.length ? (
        <>
          <div className="title">
            历史搜索
            <div className="iconfont title-close" onClick={handleClean}>
              &#xe616;
            </div>
          </div>
          <ul className="list">
            {historyList.map((item, index) => {
              return (
                <li
                  className="list-item"
                  key={index}
                  onClick={() => {
                    handleKeywordClick(item);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      <div className="title">热门搜索</div>
      <ul className="list">
        {(hostList || []).map((item) => {
          return (
            <li
              className="list-item"
              key={item.id}
              onClick={() => {
                handleKeywordClick(item.keyword);
              }}
            >
              {item.keyword}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
