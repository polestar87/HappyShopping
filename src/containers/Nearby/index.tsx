import "./style.scss";
import {useState} from 'react';
import useRequest from "@/hooks/useRequest";
import { ResponseType } from "./types";
import {Link} from 'react-router-dom'

const localLocation = localStorage.getItem("location");
const LocationHistory = localLocation ? JSON.parse(localLocation) : null;
const defaultRequestData = {
  url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/nearby",
  method: "POST",
  data: {
    latitude: LocationHistory ? LocationHistory.latitude : 37.7304167,
    longituse: LocationHistory ? LocationHistory.longituse : -122.38425,
  },
  manual: true
};

const Nearby = () => {
  const { data } = useRequest<ResponseType>(defaultRequestData);
  const [keyValue, setKeyValue] = useState("")
  const list = (data?.data || []).filter(item => {
    return item.name.indexOf(keyValue) > -1
  });
  
  return (
    <div className="page nearby-page">
      <div className="title">
        <Link to="/home">
          <div className="iconfont title-icon">&#xe697;</div>
        </Link>
        切换门店
      </div>
      <div className="search">
        <div className="iconfont search-icon">&#xe651;</div>
        <input 
          type="text" 
          className="search-input" 
          placeholder="请输入地址"
          value={keyValue}
          onChange={(e)=> setKeyValue(e.target.value)}
        />
      </div>
      <div className="subtitle">附近门店</div>
      <ul className="list">
        {
          list.map((item) => {
            return (
              <li className="list-item" key={item.id}>
                <div className="list-item-left">
                  <div className="list-item-title">{item.name}</div>
                  <p className="list-item-desc">联系电话:{item.phone}</p>
                  <div className="list-item-desc">{item.address}</div>
                </div>
                <div className="list-item-right">
                  <span className="iconfont list-item-distance">&#xe637;</span>{item.distance}m
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Nearby;
