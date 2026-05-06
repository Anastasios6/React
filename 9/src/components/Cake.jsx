import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buyCake,
  restockCakes,
  restockCakesInput,
} from "../actions/CakeActions";

export const Cake = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.CakeReducer.cakes);

  const [amount, setAmount] = useState(0);
  const [restock, setRestock] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;

    e.preventDefault();
    if (value > cakes) {
      alert(`Not enough cakes, only ${cakes} left`);
      setAmount(cakes);
    } else {
      setAmount(e.target.value);
    }
  };

  const handleChangeRestock = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setRestock(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(buyCake(Number(amount)));
    setAmount(0);
  };

  const restockSubmit = (e) => {
    e.preventDefault();
    dispatch(restockCakesInput(Number(restock)));
    setRestock(0);
  };

  return (
    <div id="cake">
      <h2>Cakes</h2>
      <h1>Number of cakes: {cakes}</h1>
      <hr />
      <button
        onClick={() => {
          dispatch(buyCake(1));
        }}
      >
        Buy 1 cake
      </button>
      <button
        onClick={() => {
          dispatch(buyCake(2));
        }}
      >
        Buy 2 cakes
      </button>
      <button
        onClick={() => {
          dispatch(buyCake(3));
        }}
      >
        Buy 3 cakes
      </button>
      <button
        onClick={() => {
          dispatch(restockCakes());
        }}
      >
        Restock cakes by 10
      </button>
      <hr />
      <h1>pt2-input</h1>
      <h2>Amount of cakes: {cakes}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="select amount of cakes "
          onChange={handleChange}
          max={cakes}
          value={amount}
        />
        <button disabled={cakes < amount}>Buy cakes</button>
      </form>
      <hr />
      <h2>Restock</h2>

      <form onSubmit={restockSubmit}>
        <input
          type="number"
          placeholder="Select restock amount"
          onChange={handleChangeRestock}
          value={restock}
        />

        <button type="submit">Restock cakes</button>
      </form>
    </div>
  );
};
