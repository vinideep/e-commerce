import React from "react";
import { Link } from "react-router-dom";
const Dropdown = ({ toggle, isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-5 text-left -mt-7 z-50 -ml-6 items-center lg:hidden fixed w-full bg-gray-100"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link
        className="lg:inline-flex lg:w-auto text-gray-600 p-2 hover:text-white hover:bg-gray-600"
        to="/"
      >
        HOME
      </Link>

      <Link
        className="lg:inline-flex lg:w-auto text-gray-600 p-2 hover:text-white hover:bg-gray-600"
        to="/products"
      >
        PRODUCTS
      </Link>

      <Link
        className="lg:inline-flex lg:w-auto text-gray-600 p-2 hover:text-white hover:bg-gray-600"
        to="/about"
      >
        ABOUT
      </Link>

      <Link
        className="lg:inline-flex lg:w-auto text-gray-600 p-2 hover:text-white hover:bg-gray-600"
        to="/login"
      >
        LOGIN
      </Link>
    </div>
  );
};
export default Dropdown;
