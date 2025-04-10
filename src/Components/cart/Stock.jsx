import React from "react";

const Stock = ({
  prods: { Id, name, Price, Stock, quantity },
  inc,
  dec,
  reset,
}) => {
  return (
    <div className="w-3/4 flex justify-evenly items-center p-2 my-2 font-bold bg-blue-500 rounded-lg">
      <span>Name: {name}</span>
      <span>Price: {Price}K</span>
      <span>InStock: {Stock}</span>
      <span>Quantity: {quantity}</span>
      <button
        className="btn bg-green-500 hover:bg-green-600 hover:border-none border-none hover:shadow-none shadow-none text-xl"
        onClick={() => inc(Id)}>
        Add
      </button>
      <button
        className="btn bg-yellow-500 hover:bg-yellow-600 hover:border-none border-none hover:shadow-none shadow-none text-xl"
        onClick={() => dec(Id)}>
        Remove
      </button>
      <button
        className="btn bg-red-500 hover:bg-red-600 hover:border-none border-none hover:shadow-none shadow-none text-xl"
        onClick={() => reset(Id)}>
        Delete
      </button>
    </div>
  );
};

export default Stock;
