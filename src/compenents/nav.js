import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import Menu from "./svg/bars-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import Logo from "./svg/pagelines-brands.svg";
import "../styles/header.css";
const Nav = ({ toggle, isOpen }) => {
  const contextData = useContext(ShopContext);
  return (
    <header>
      <nav className="flex items-center flex-wrap p-2 z-10 bg-white fixed top-0 w-full">
        {/* logo */}
        <Link to="/" className="inline-flex p-2 m- transition-all">
          <img className="lg:w-10 lg:px-2 md:w-5 md:mx-2 w-3" src={Logo} alt="style" />
          <h1 className="lg:text-3xl text-lg font-extrabold text-gray-700 tracking-wider uppercase">
            TEXSOUL FASHIONS
          </h1>
          <img className="lg:w-10 lg:px-2 md:w-5 md:mx-2 w-3" src={Logo} alt="style" />
        </Link>
        {/* logo ends */}
        {/* cart Icon */}
        <div className="flex ml-auto">
          <Link
            className="inline-flex p-2 ml-auto lg:hidden"
            to="/cart"
            onClick={() => (isOpen ? toggle() : null)}
          >
            <img
              className="lg:w-7 lg:z-10 md:w-7 w-5 mx-2 animate-pulse"
              src={CartIcon}
              alt="style"
            />
            <sub className="  ">{contextData.value}</sub>
          </Link>
          {/* cart Icon ends */}
          {/* hamburger menu bar */}
          <Link
            to="/"
            className="inline-flex p-3 hover:bg-gray-400 rounded-lg lg:hidden ml-auto"
            onClick={() => {
              toggle();
            }}
          >
            <img className="md:w-6 w-5" src={Menu} alt="style" />
          </Link>
        </div>
        {/* hamburger menu bar ends */}
        {/* list of menu starts */}
        <div
          className={
            isOpen
              ? "w-full lg:inline-flex lg:flex-grow lg:w-auto"
              : "w-full lg:inline-flex lg:flex-grow lg:w-auto hidden"
          }
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col ">
            <Link
              className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:shadow-xl hidden  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/cart"
            >
              <img
                className="lg:w-7 lg:z-10 w-7 mx-2 animate-pulse"
                src={CartIcon}
                alt="style"
              />
              <sub className="  ">{contextData.value}</sub>
            </Link>
            <Link
              className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl
              transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/"
              onClick={() => {
                toggle();
              }}
            >
              HOME
            </Link>

            <Link
              className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl  transition duration-300 ease-in-out transform hover:rotate-3 hover:-translate-y-1 hover:scale-110"
              to="/products"
              onClick={() => {
                toggle();
              }}
            >
              PRODUCTS
            </Link>

            <Link
              className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl  transition duration-300 ease-in-out transform hover:-rotate-3 hover:-translate-y-1 hover:scale-110"
              to="/about"
              onClick={() => {
                toggle();
              }}
            >
              ABOUT
            </Link>

            <Link
              className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              to="/login"
              onClick={() => {
                toggle();
              }}
            >
              LOGIN
            </Link>
          </div>
        </div>
        {/* list of menu ends */}
      </nav>
    </header>
  );
};
export default Nav;
