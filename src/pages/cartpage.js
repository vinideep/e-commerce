import { ShopContext } from "../context/shopContext";
import React, { useContext } from "react";
// import Products from "./productList";
const CartData = () => {
  const contextData = useContext(ShopContext);
  const total = contextData.store.reduce(
    (total, item) => total + item.quantity * Number(item.price.slice(1)),
    0
  );
  const cartList = (name, index) => (
    <div className="flex m-auto p-4" key={index}>
      <img
        src={name.image.sourceUrl}
        className="w-56 border-2 rounded-lg border-gray-300"
        alt="item"
      />
      <h1 className="m-auto text-xl">{name.name}</h1>
      <span className="m-auto bg-gray-200 p-2 rounded-full">
        £ {name.price.slice(1).toString() * name.quantity}
      </span>
      <div className="flex justify-between">
        <button
          className="bg-gray-800 text-white text-2xl px-4 m-auto rounded-lg"
          onClick={() => {
            contextData.Decrement(name);
          }}
        >
          -
        </button>
        <span className="m-auto px-6 bg-gray-50">{name.quantity}</span>
        <button
          className="bg-gray-800 text-white text-2xl px-4 m-auto rounded-lg"
          onClick={() => {
            contextData.addProductToCart(name);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
  return (
    <div className="w-2/3 md:w-full m-auto p-4">
      <h1 className="text-4xl text-center font-bold mt-20 text-gray-500">CART</h1>
      {contextData.store.length>0 ? (
        contextData.store.map((name, index) =>
          name ? cartList(name, index) : null
        )
      ) : (
        <p className="text-center text-2xl tracking-wider p-10 text-red-500 font-bold">Empty Cart</p>
      )}
      <div className="flex w-1/4 ml-auto border-2 p-4 border-indigo-300 text-xl">
        <p>Cart Total - </p>
        <span className="ml-auto">{total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartData;
