import useRequest from "@/hooks/useRequest";
import "./style.scss";
import { ResponseType, ProductResponseType, ProductType } from "./types";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Docker from "@/components/Docker";

const Category = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<
    Array<{ id: number; name: string }>
  >([]);
  const [tags, setTags] = useState<string[]>([]);
  // 驱动请求重新发送数据
  const [keyword, setKeyword] = useState("");
  const [currentTag, setCurrentTag] = useState<string>("");
  const [currentCetagory, setCurrentCetagory] = useState<number>();

  const [productList, setProductList] = useState<Array<ProductType>>([]);
  // const [requestData, setRequestData ] = useState({
  //   url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/searchList",
  //   method: "get",
  //   params: {
  //     tag: '',
  //     keyword: '',
  //     category: ''
  //   },
  //   manual: true
  // })
  const { request: tagData } = useRequest<ResponseType>({ manual: false });
  const { request: productRequest } = useRequest<ProductResponseType>({
    manual: false,
  });
  // const productList = data?.data || [];

  // console.log('product-category', data);
  useEffect(() => {
    productRequest({
      url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/searchList",
      method: "get",
      params: {
        tag: currentTag,
        keyword,
        category: currentCetagory,
      },
      // manual: true
    }).then((res) => {
      console.log("product-list", res);
      if (res?.success) {
        const result = res?.data;
        setProductList(result);
      }
    });
  }, [keyword, currentTag, currentCetagory]);
  useEffect(() => {
    tagData({
      url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/categoryAndTag",
      method: "get",
    }).then((res: any) => {
      console.log(res);
      const result = res.data;
      setCategories(result.category);
      setTags(result.tag);
    });
  }, []);
  function handleKeyDown(key: string, target: EventTarget & HTMLInputElement) {
    if (key === "Enter") {
      setKeyword(target.value);
    }
  }
  return (
    <div className="page category-page">
      <div className="title">分类</div>

      <div className="search">
        <div className="search-area">
          <div className="search-icon iconfont">&#xe651;</div>
          <input
            type="text"
            className="search-input"
            placeholder="请输入商品名称"
            onKeyDown={(e) => handleKeyDown(e.key, e.currentTarget)}
          />
        </div>
      </div>

      <div className="category">
        <div
          className={
            currentCetagory === 0
              ? "category-item category-item-active"
              : "category-item"
          }
          onClick={() => setCurrentCetagory(0)}
        >
          全部
        </div>
        {categories.map((category) => {
          return (
            <div
              className={
                category.id === currentCetagory
                  ? "category-item category-item-active"
                  : "category-item"
              }
              // className="category-item"
              key={category.id}
              onClick={() => setCurrentCetagory(category.id)}
            >
              {category.name}
            </div>
          );
        })}
      </div>
      <div className="tag">
        <div
          className={
            currentTag === "" ? "tag-item tag-item-active" : "tag-item"
          }
          onClick={() => setCurrentTag("")}
        >
          全部
        </div>
        {tags.map((tag, index) => {
          return (
            <div
              className={
                currentTag === tag ? "tag-item tag-item-active" : "tag-item"
              }
              key={index}
              onClick={() => setCurrentTag(tag)}
            >
              {tag}
            </div>
          );
        })}
      </div>
      <div className="product">
        {/* <div className="product-title">精品商品（50）</div> */}
        {productList.map((item, index) => {
          return (
            <div className="product-item" key={item.id}>
              <img className="product-item-img" src={item.imgUrl} alt="" />
              <div className="product-item-content">
                <div className="product-item-title">{item.title}</div>
                <div className="product-item-sales">月售{item.sales}</div>
                <div className="product-item-price">
                  <span className="product-item-price-yen">&yen;</span>
                  {item.price}
                </div>
                <div className="product-item-button">购买</div>
              </div>
            </div>
          );
        })}
      </div>
      <Docker />
    </div>
  );
};

export default Category;
