import "../styles/Cart.css";
import { removeFromCart, clearCart } from "../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux/";
import { ItemCard } from "./ItemCard";

export const Cart = () => {
  let dispatch = useDispatch();
  let items = useSelector((state) => state);
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  console.log(items);

  return (
    <div className="cart">
      <div className="items-list cart-list">
        {items.map((product) => {
          return (
            <ItemCard
              key={product.id}
              itemKey={product.id}
              title={product.title}
              price={product.price}
              imageLink={
                product.images[product.images.length - 1] // because last image thumbnail(if any)
              }
              onButtonClick={() => {
                dispatch(removeFromCart(product.id));
              }}
            />
          );
        })}
      </div>
      <div className="checkout">
        <div className="checkout-list">
          {items.map((product) => {
            return (
              <div className="checkout-item">
                <div
                  style={{
                    maxWidth: "70%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {product.title}
                </div>
                <div>₹ {(product.price * 83.18).toFixed(2)}</div>
              </div>
            );
          })}
        </div>
        <div className="checkout-item">
          <div>Total:</div>
          <div>₹ {(totalPrice * 83.18).toFixed(2)}</div>
        </div>
        <button
          onClick={() => {
            dispatch(clearCart());
            alert("Checkout Successful");
          }}
          style={{
            width: "90%",
            backgroundColor: "white",
            color: "black",
            marginBottom: "1rem",
          }}
        >
          Click To Checkout
        </button>
      </div>
    </div>
  );
};
