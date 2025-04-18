import React, { useState } from "react";
import Header from "./Components/Header";
import Items from "./Components/cart/Items";

const App = () => {
  let [prods, setprods] = useState([
    { Id: 1, name: "CPU", Price: 6, Stock: 20, quantity: 0 },
    { Id: 2, name: "GPU", Price: 20, Stock: 50, quantity: 0 },
    { Id: 3, name: "MB", Price: 3, Stock: 12, quantity: 0 },
    { Id: 4, name: "RAM", Price: 1, Stock: 25, quantity: 0 },
  ]);

  const inc = (Id) => {
    let updt = prods.map((prod) => {
      if (prod.Id === Id && prod.Stock > 0) {
        return {
          ...prod,
          quantity: prod.quantity + 1,
          Stock: prod.Stock - 1,
        };
      }
      return prod;
    });
    setprods(updt);
  };

  const dec = (Id) => {
    let updt = prods.map((prod) => {
      if (prod.Id === Id && prod.quantity > 0) {
        return {
          ...prod,
          quantity: prod.quantity - 1,
          Stock: prod.Stock + 1,
        };
      }
      return prod;
    });
    setprods(updt);
  };

  const reset = (Id) => {
    let updt = prods.map((prod) => {
      if (prod.Id === Id) {
        return {
          ...prod,
          Stock: prod.Stock + prod.quantity,
          quantity: 0,
        };
      }
      return prod;
    });
    setprods(updt);
  };

  const calculateTotal = () => {
    return prods.reduce((acc, prod) => acc + prod.quantity * prod.Price, 0);
  };

  return (
    <div>
      <Header />
      <Items
        prods={prods}
        inc={inc}
        dec={dec}
        reset={reset}
        total={calculateTotal()}
      />
    </div>
  );
};

export default App;
