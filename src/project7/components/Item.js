import "./Item.css";

const Item = () => {
  return (
    <>
      <h1>쇼핑카트</h1>
      <div className="Cart">
        <h3>Apple🍎</h3>
        <p>1000원</p>
        <p>수량: {}</p>
      </div>
      <div className="Cart">
        <h3>Banana🍌</h3>
        <p>500원</p>
        <p>수량: {}</p>
      </div>
      <div className="Cart">
        <h3>Cherry🍒</h3>
        <p>2000원</p>
        <p>수량: {}</p>
      </div>
      <p>총 가격: </p>
    </>
  );
};

export default Item;
