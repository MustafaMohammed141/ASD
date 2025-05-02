import { useState } from "react";
import Stock from "./Stock";

const Items = ({ prods, inc, dec, del, total }) => {
  return (
    <div className="w-full flex items-center">
      <div className="my-28 mx-2 w-3/4">
        {prods.map((prod) => (
          <Stock prods={prod} key={prod.Id} inc={inc} dec={dec} del={del} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl">Total = {total}</span>
      </div>
    </div>
  );
};

export default Items;
