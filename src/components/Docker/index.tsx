import { useNavigate, useLocation } from "react-router-dom";
import "./styles.scss";
function Docker() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // console.log(location);

  const items = [
    {
      path: "/home",
      icon: "&#xe6b8;",
      text: "首页",
    },
    {
      path: "/category",
      icon: "&#xe63d;",
      text: "分类",
    },
    {
      path: "/shopping",
      icon: "&#xe70b;",
      text: "购物车",
    },
    {
      path: "/my",
      icon: "&#xe607;",
      text: "我的",
    },
  ];
  return (
    <div className="docker">
      {items.map((item) => {
        return (
          <div
            key={item.path}
            className={
              pathname === item.path
                ? "docker-item docker-item-active"
                : "docker-item"
            }
            onClick={() => navigate(item.path)}
          >
            <p
              className="iconfont docker-item-icon"
              dangerouslySetInnerHTML={{
                __html: item.icon,
              }}
            ></p>
            <p className="docker-item-title">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Docker;
