import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";
import { setSearchVal } from "../../store/products/productsSlice";

const ProductsSearch = () => {
  const { search } = useSelector(state => state.products);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if(!search) {
      setSearchValue('');
    };
  }, [search]);

  return (
    <div className="relative w-1/6">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>

      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        id="Search"
        placeholder="Search for..."
        className="w-full rounded-md py-2.5 pe-10 shadow-sm sm:text-sm  opacity-90 dark:bg-pink-500"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button onClick={() => {
          dispatch(setSearchVal({ search: searchValue }));
          dispatch(getProducts());
        }} type="button" className="text-white hover:text-white">
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default ProductsSearch;
