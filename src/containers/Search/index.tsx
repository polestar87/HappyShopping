import "./style.scss";
import { ResponseType } from "./types";
import { useState } from "react";
import { Link } from "react-router-dom";
import useRequest from "@/hooks/useRequest";

const defaultRequestData = {
  url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/hostSearch",
  method: "get",
  manual: true,
};

const Search = () => {
  const localSearchList = localStorage.getItem("search-list");
  const searchListHistory: string[] = localSearchList
    ? JSON.parse(localSearchList)
    : [];
  const [keyword, setKeyword] = useState("");
  const [historyList, setHistotyList] = useState(searchListHistory);


  const { data } = useRequest<ResponseType>(defaultRequestData);
  const hostList = data?.data

  function handleKeyDown(key: string) {
    console.log(key);
    if (key === "Enter") {
      let newHistoryList = [...historyList];
      newHistoryList.unshift(keyword);

      if (newHistoryList.length > 20) {
        newHistoryList.length = 20;
      }
      setHistotyList(newHistoryList);

      setKeyword("");

      localStorage.setItem("search-list", JSON.stringify(newHistoryList));
    }
  }
  function handleClean() {
    setHistotyList([]);
    localStorage.removeItem("search-list");
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
                <li className="list-item" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      <div className="title">热门搜索</div>
      <ul className="list">
        {
          (hostList || []).map((item) => {
            return <li className="list-item" key={item.id}>{item.keyword}</li>
          })
        }
        {/* <li className="list-item">猪肉</li>
        <li className="list-item">鸡肉</li>
        <li className="list-item">海鲜</li> */}
      </ul>
    </div>
  );
};

export default Search;
