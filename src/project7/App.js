import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Item from "./components/Item";
import React, { useState } from "react";

function App() {
  // 장바구니 상태 (state)를 관리할 예정!
  // cart는 장바구니에 있는 아이템들의 배열
  const [cart, setCart] = useState([]);

  // 그...뭐냐...목록
  const items = [
    { id: 1, name: "Apple", price: 1000 },
    { id: 2, name: "Banana", price: 500 },
    { id: 3, name: "Cherry", price: 2000 },
  ];

  // 아이템을 추가해봅시다.
  // 추가할 item을 받을거예요.
  const addToCart = (item) => {
    // setCart 함수를 호출해서 장바구니 상태 업데이트
    // prevCart는 이전 장바구니 상태!
    setCart((prevCart) => {
      // 이미 장바구니에 있는지 없는지, 확인하는 작업
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      // 이미 장바구니에 있는 경우, 해당 아이템의 수량을 증가!!!
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        // 장바구니에 없는 경우, 새로운 아이템을 추가하고 수량을 1로 설정!
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="App">
      <Header />
      <Cart cart={cart} />
      <Item />
    </div>
  );
}

export default App;
