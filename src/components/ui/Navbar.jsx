import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout, checkUserLogin } from "../../helpers/functions";
import { updateToken } from "../../helpers/functions";
import logo from './images/logo.png'
import { getCart } from '../../store/cart/cartSlice'

const NavBar = () => {
  const { countProductsInCart } = useSelector(state => state.cart);

  const navigate = useNavigate();
  const  dispatch = useDispatch();

  useEffect(() => {
    updateToken();
    dispatch(getCart());
  }, []);

  return (
    <>
      <header className="w-full bg-transparent p-4 mt-22">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 md:ml-4">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img src={logo} alt="" className="w-40" />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-white transition  hover:text-pink-600 hover:text-opacity-75 font-bold uppercase"
                      href="/"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-pink-600 hover:text-opacity-75 font-bold uppercase"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-pink-600 hover:text-opacity-75 font-bold uppercase"
                      href="/"
                    >
                      History
                    </a>
                  </li>

                  {checkUserLogin() && (
                    <li>
                      <button
                        className="text-white transition hover:text-pink-600 hover:text-opacity-75 font-bold uppercase"
                        onClick={() => navigate("/cart")}
                      >
                        Cart {countProductsInCart}
                      </button>
                    </li>
                  )}
                  
                  {checkUserLogin() && (
                    <li>
                      <button
                        className="text-white transition hover:text-pink-600 hover:text-opacity-75 font-bold uppercase"
                        onClick={() => navigate("/product-create")}
                      >
                        Add Product
                      </button>
                    </li>
                  )}

                  <li>
                    <button
                      className="text-white transition hover:text-pink-600 hover:text-opacity-75 font-bold uppercase"
                      onClick={() => navigate("/products")}
                    >
                      Products
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {checkUserLogin() ? (
                  <button
                    className="rounded-md bg-gradient-to-r from-pink-300 to-blue-100 px-5 py-2.5 text-sm font-bold text-purple-500 shadow uppercase"
                    href="/"
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      className="rounded-md bg-gradient-to-r from-purple-200 to-pink-200 px-5 py-2.5 text-sm font-bold text-purple-500 shado uppercase"
                      href="/"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </button>
                    <div className="hidden sm:flex">
                      <button
                        className="rounded-md bg-gradient-to-r from-blue-100 to-pink-200 px-5 py-2.5 text-sm font-bold text-pink-500 uppercase"
                        href="/"
                        onClick={() => navigate("/register")}
                      >
                        Register
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBar;