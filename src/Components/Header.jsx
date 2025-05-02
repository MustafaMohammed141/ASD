import React, { useEffect, useState } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
function Header({ prods }) {
  let [cart, setCart] = useState(0);
  useEffect(() => {
    setCart(prods.reduce((x, prod) => x + prod.quantity, 0));
  }, [prods]);

  return (
    <div>
      <div className="navbar bg-C4 text-primary-content">
        <div className="flex-1">
          <button className="btn btn-ghost hover:bg-sky-500 hover:border-none border-none hover:shadow-none shadow-none text-xl">
            Hardware Store
          </button>
        </div>
        <div className="flex items-center gap-5">
          <button className="btn btn-ghost hover:bg-sky-500 hover:border-none border-none hover:shadow-none shadow-none transition-all duration-200 rounded-full py-7 ">
            <RiShoppingCartFill className="text-2xl " />
            <div>{cart}</div>
          </button>
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
