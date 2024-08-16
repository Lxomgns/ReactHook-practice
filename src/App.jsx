import { useState, useLayoutEffect, useId } from "react";
import "./App.css";
import Revenue from "./Revenue";
import { ValueContext } from "./ValueContext";
import Bonus from "./Bonus";

function App() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const id = useId()

  return (
    <>
    <p style={{marginBottom:60}}>사업자 등록 번호: {id}</p>
      {loading && <p>로딩완료!</p>}
      <p>현재 수익: {value}</p>
      <button
        onClick={() => {
          setValue((value) => {
            return value + 1;
          });
        }}
      >
        돈 벌기
      </button>
      <ValueContext.Provider value={{ value, setValue }}>
        <Revenue />
        <Bonus/>
      </ValueContext.Provider>
    </>
  );
}

export default App;
