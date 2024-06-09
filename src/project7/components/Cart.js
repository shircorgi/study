import "./Cart.css";

const Cart = ({ item, addToCart }) => {
  return (
    <>
      <div className="Cart">
        <h3>Apple🍎</h3>
        <p>1000원</p>
        <button onClick={() => addToCart(item)}>장바구니에 추가</button>
      </div>
      <div className="Cart">
        <h3>Banana🍌</h3>
        <p>500원</p>
        <button onClick={() => addToCart(item)}>장바구니에 추가</button>
      </div>
      <div className="Cart">
        <h3>Cherry🍒</h3>
        <p>2000원</p>
        <button onClick={() => addToCart(item)}>장바구니에 추가</button>
      </div>
    </>
  );
};

export default Cart;
