import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cartSlice";
import { changeCountProductInCart, deleteProductFromCart, cleanCart, createOrder } from "../../store/cart/cartActions";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div>
      {cart && (
        <>
          {cart.products.length ? (
            <>
              <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                  <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                      <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Your Cart
                      </h1>
                    </header>
                    <div className="mt-10">
                      <ul className="space-y-10">
                        {cart.products.map((product) => (
                          <li className="flex items-center gap-10">
                            <img
                              src={product.productItem.picture}
                              alt={product.name}
                              className="h-20 w-20 rounded object-cover"
                            />

                            <div>
                              <h5 className="text-sm text-gray-900">
                                {product.productItem.name}
                              </h5>

                              <dl className="mt-0.5 space-y-px text-[12px] text-gray-600">
                                <div>
                                  <dd className="inline">
                                    Total-Price: ${product.totalPrice}
                                  </dd>
                                </div>

                                <div>
                                  <dd className="inline">
                                    Price: ${product.productItem.price}
                                  </dd>
                                </div>
                              </dl>
                            </div>

                            <div className="flex flex-1 items-center justify-end gap-2">
                              <form>
                                <label for="Line3Qty" className="sr-only">
                                  {" "}
                                  Quantity{" "}
                                </label>

                                <input
                                  onChange={(e) => {
                                    changeCountProductInCart(product.productItem.id, +e.target.value);
                                    dispatch(getCart());
                                  }}
                                  type="number"
                                  min="1"
                                  value={product.count}
                                  id="Line3Qty"
                                  className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                />
                              </form>

                              <button 
                              onClick={() => {
                                deleteProductFromCart(product.productItem.id);
                                dispatch(getCart());
                              }}
                              className="text-gray-600 transition hover:text-red-600">
                                <span className="sr-only">Remove item</span>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="h-5 w-5"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                        <div className="w-screen max-w-lg space-y-4">
                          <dl className="space-y-0.5 text-sm text-gray-700">
                            <div className="flex justify-between !text-base font-medium">
                              <dt>Total</dt>
                              <dd>${cart.totalCost}</dd>
                            </div>
                          </dl>

                        

                          <div className="flex justify-end">
                            <a
                              onClick={() => {
                                dispatch(createOrder());
                              }}
                              href="#"
                              className="block rounded bg-pink-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-pink-600"
                            >
                              Order
                            </a>
                            <a
                              onClick={() => {
                                cleanCart();
                                dispatch(getCart());
                              }}
                              href="#"
                              className="ml-2 block rounded bg-pink-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-pink-600"
                            >
                              CLean
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <h3>Cart is empty!</h3>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
