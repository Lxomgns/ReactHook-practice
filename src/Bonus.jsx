import { useContext, useState, useEffect, useInsertionEffect, useDebugValue, useRef } from "react";
import { ValueContext } from "./ValueContext";

export default function Bonus() {
  const { value } = useContext(ValueContext);
  const [isBonus, setIsBonus] = useState(false);
  let rnum = useRef
  const random = () => {
    rnum = Math.floor(Math.random() * 20);
    if (rnum === 9) {
      setIsBonus(true);
      const timer = setTimeout(() => {
        setIsBonus(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  };

  useDebugValue(isBonus ? "Success Bro!" : "ㅠㅠ")

  useEffect(() => {
    const clean = random();
    return clean;
  }, [value]);

  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
            .Bonus p {
                color: ${isBonus ? "gold" : "black"};
                font-weight: ${isBonus ? "bold" : "normal"};
                font-size: ${isBonus ? "24px" : "16px"};
                transition: all 0.3s ease;
            }
        `
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [isBonus]);

  return (
    <div className="Bonus">
      <p>돈을 열심히 벌다보면 좋은 일이 일어나지 않을까??</p>
      {isBonus && <p>보너스 성공!</p>}
    </div>
  );
}
