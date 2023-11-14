import { CardType } from "../types";

type CardPropsType = {
  title: string;
  list: CardType | undefined;
};

const Card = (props: CardPropsType) => {
  const { title, list } = props;

  return (
    <div className="card">
      <h3 className="card-title">
        <img
          className="card-title-img"
          src="http://statics.dell-lee.com/shopping/hot.png"
          alt={title}
        />
        {title}
        <div className="card-title-more">
          更多<span className="iconfont">&#xe614;</span>
        </div>
      </h3>
      <div className="card-content">
        {(list || []).map((item) => {
          return (
            <div className="card-content-item">
              <img
                className="card-content-item-img"
                src={item.imgUrl}
                alt={item.name}
              />
              <p className="card-content-item-desc">{item.name}</p>
              <div className="card-content-item-price">
                <span className="card-content-item-yen"> &yen;</span>
                {Number(item.price).toFixed(2)}
                <div className="iconfont">&#xe606;</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
