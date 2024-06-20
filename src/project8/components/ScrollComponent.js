import { useEffect, useState } from "react";
import "../css/ScrollComponent.css";

const ScrollComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //if문으로 사용
  // useEffect(() => {
  //   const boxElement = document.querySelector(".box");
  //   if (scrollY >= 700) {
  //     boxElement.classList.add("visible");
  //     boxElement.classList.remove("hidden");
  //   } else if (scrollY <= 600) {
  //     boxElement.classList.add("hidden");
  //     boxElement.classList.remove("visible");
  //   }
  // }, [scrollY]);

  return (
    <div className="scroll-component">
      <h1>스크롤 Y 위치: {scrollY}</h1>
      <div className="content">
        <p>스크롤을 내려보세요!</p>
        <p>스크롤 Y 위치가 업데이트됩니다.</p>
        <div
          className={`box ${
            scrollY >= 500 ? "visible" : scrollY <= 600 ? "hidden" : ""
          }`}
        >
          yes
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;
