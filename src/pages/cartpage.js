import { ShopContext } from "../context/shopContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
const CartData = () => {
  const contextData = useContext(ShopContext);
  const total = contextData.store.reduce(
    (total, item) => total + item.quantity * Number(item.price.slice(1)),
    0
  );

  const cartList = (name, index) => (
    <div className="block text-center lg:flex m-auto p-4" key={index}>
      <Link to={`/product${name.id}`}>
        <img
          src={name.image.sourceUrl}
          className="w-56 border-2 m-auto rounded-lg border-gray-300"
          alt="item"
        />
      </Link>
      <Link to={`/product${name.id}`} className="m-auto">
        <h1 className="m-auto p-2 text-2xl font-semibold text-gray-600">
          {name.name}
        </h1>
      </Link>
      <span className="m-auto bg-gray-200 w-20 p-2 rounded-full">
        £ {name.price.slice(1).toString() * name.quantity}
      </span>
      <div className="flex justify-between md:w-1/5 mt-4 md:m-auto lg:m-auto py-6">
        <button
          className="bg-gray-800 text-white text-2xl px-4 py-2 m-auto text-center rounded-lg"
          onClick={() => {
            contextData.decrement(name);
          }}
        >
          -
        </button>
        <span className="m-auto px-6 bg-gray-50">{name.quantity}</span>
        <button
          className="bg-gray-800 text-white text-2xl px-4 py-2 m-auto items-center rounded-lg"
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
    <div className="w-full lg:w-10/12 md:w-full m-auto lg:p-4 ">
      <h1 className="lg:text-4xl md:text-2xl text-xl text-center font-bold mt-20 pb-6 text-gray-500">
        CART
      </h1>
      <hr className="border-2 mb-4" />
      {contextData.store.length > 0 ? (
        contextData.store.map((name, index) =>
          name ? cartList(name, index) : null
        )
      ) : (
        <div className="block">
          <p className=" text-2xl text-center tracking-wider p-10 text-red-500 font-bold">
            Your Cart is Empty
          </p>
          <div className="flex">
            <Link to="/" className="lg:ml-auto m-auto lg:m-0">
              <span className="text-lg rounded-full p-2  hover:bg-gray-300">
                Go to shopping &rarr;
              </span>
            </Link>
          </div>
        </div>
      )}
      {total > 1 ? (
        <div className="lg:block flex-wrap  md:block">
          <div className="flex lg:w-1/4 w-3/4 md:w-1/2 m-auto ml-auto border-2 p-2 lg:p-3 md:my-3 border-indigo-300 text-xl">
            <p>Cart Total - </p>
            <span className="ml-auto">{total.toFixed(2)}</span>
          </div>
          <div
            onClick={() => contextData.clearCart()}
            className="lg:w-1/6 w-full md:w-1/3 my-4 font-semibold m-auto ml-auto border-2 md:my-3 cursor-pointer p-2 from-gray-400 bg-gradient-to-t to-gray-200 text-center border-indigo-300 text-xl"
          >
            Clear Cart
          </div>
          <div className="lg:w-1/5 tracking-tighter w-full my-4 md:w-1/3 m-auto md:ml-auto font-semibold lg:ml-auto border-2 cursor-pointer text-gray-700 p-2 bg-gradient-to-b hover:from-green-700 text-center text-xl from-yellow-200 to-yellow-500">
            Proceed to Checkout
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartData;
