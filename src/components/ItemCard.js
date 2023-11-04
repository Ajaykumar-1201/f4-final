import "../styles/ItemCard.css";

export const ItemCard = ({
  home = false,
  itemKey,
  title,
  imageLink,
  price,
  onButtonClick,
}) => {
  return (
    <div key={itemKey} className={"item-card"}>
      <img className="item-image" src={imageLink} alt="item image" />
      <div className="item-title">
        Title: <span>{title}</span>
      </div>
      <div className="item-price">
        Price: <span>{`₹ ${(price * 83).toFixed(2)}`}</span>
      </div>
      {onButtonClick && (
        <button className="add-to-cart-button" onClick={onButtonClick}>
          {home ? "Add To Cart" : "Remove From Cart"}
        </button>
      )}
    </div>
  );
};
