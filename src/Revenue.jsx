import { useContext, useDeferredValue, useEffect, useReducer, useState } from "react";
import { ValueContext } from "./ValueContext";

export default function Revenue() {
  const { value, setValue } = useContext(ValueContext);

  const reducer = (state, action) => {
    switch (action.type) {
      case "save":
        return state + action.saveAmount;
      case "BBilla":
        if (state >= action.price) {
          console.log("빌라 구매 완료!");
          return state - action.price;
        } else {
          console.log("돈이 없어요 후잉..");
          return state;
        }
      case "BApart":
        if (state >= action.price) {
          console.log("아파트 구매 완료!");
          return state - action.price;
        } else {
          console.log("돈이 없어요 후잉..");
          return state;
        }
      case "BHotel":
        if (state >= action.price) {
          console.log("호텔 구매 완료!");
          return state - action.price;
        } else {
          console.log("돈이 없어요 후잉..");
          return state;
        }
      default:
        console.log("돈이 없어요 후잉..");
        return state;
    }
  };
  const [account, dispatch] = useReducer(reducer, 0);
  const deferred = useDeferredValue(account)

  return (
    <>
      <p>현재 계좌: {account}</p>
      <button
        onClick={() => {
          dispatch({ type: "save", saveAmount: value });
          setValue(0);
        }}
      >
        저축
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 50,
        }}
      >
        <button
          onClick={() => {
            dispatch({ type: "BBilla", price: 10 });
          }}
        >
          빌라 구매
        </button>
        <button
          onClick={() => {
            dispatch({ type: "BApart", price: 20 });
          }}
        >
          아파트 구매
        </button>
        <button
          onClick={() => {
            dispatch({ type: "BHotel", price: 30 });
          }}
        >
          호텔 구매
        </button>
      </div>
    </>
  );
}
