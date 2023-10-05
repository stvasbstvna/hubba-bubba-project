import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../store/products/productsActions";


const ProductCreate = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    picture: "",
    price: 0,
    type: "",
  });
  const { picture } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="mx-auto w-1/4 flex flex-col justify-center items-center m-24">
      <h3 className="mb-8 font-bold text-3xl text-center">Create Product</h3>
      <input
        className="border border-slate-300 w-full p-3 rounded mb-4"
        type="text"
        placeholder="Name"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />

      <input
        className="border border-slate-300 w-full p-3 rounded mb-4"
        type="text"
        placeholder="Description"
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />

      <input
        className="border border-slate-300 w-full p-3 rounded mb-4"
        type="number"
        placeholder="Price"
        onChange={(e) =>
          setProduct({ ...product, price: parseInt(e.target.value) })
        }
      />
        <select onChange={(e) => setProduct({ ...product, type: e.target.value })} className="w-full mb-4 p-3 h-12 border rounded-md">
          <option>electronics</option>
          <option>clothes</option>
          <option>sport</option>
        </select>
      <div className="flex flex-row w-full">
        <input
          className="border border-slate-300 w-full h-12 p-3 rounded mb-4"
          type="text"
          placeholder="Picture"
          onChange={(e) => setProduct({ ...product, picture: e.target.value })}
        />
        {picture ? (
          <img
            className="m-2 rounded-lg"
            src={product.picture}
            alt={product.name}
            width="100"
            height="100"
          />
        ) : (
          <img
            className="m-2 rounded-lg"
            src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            alt="avatar"
            width="100"
            height="100"
          />
        )}
      </div>
      <button
        className="w-full text-center py-3 rounded bg-pink-500 font-bold text-white hover:bg-pink-700"
        onClick={() => {
          dispatch(createProduct({ product }));
          navigate("/products");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default ProductCreate;
