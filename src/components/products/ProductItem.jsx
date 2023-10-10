import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductLike from "./ProductLike";
import { checkUserLogin, getAuthUser } from '../../helpers/functions';

const ProductItem = ({ product }) => {
  const [isLikedProduct, setIsLikedProduct] = useState(false);

  const navigate = useNavigate();

  const checkProductLike = () => {
    const user = getAuthUser();
    if(!product.likes) return;
    const userLike = product.likes.find(like => like.user === user);
    if(userLike) {
      setIsLikedProduct(true);
    } else {
      setIsLikedProduct(false);
    };
  };

  useEffect(() => {
    checkProductLike();
  }, []);

  return (
    <div className="m-3 w-1/4 cursor-pointer">
      <div>
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Office"
            src={product.picture}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="flex justify-around items-center relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div  onClick={() => navigate(`/products/${product.id}`)} className="p-4 sm:p-6">
              <p
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                $ {product.price}
              </p>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  {product.name}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
               {product.description}
              </p>
            </div>
            <div className="p-4 text-white text-center">
              {checkUserLogin() && (
                <ProductLike isLikedProduct={isLikedProduct} likes={product.likes} productId={product.id} />
              )}
              {product.likes ? (
                <span className="text-xl">{ product.likes.length }</span>
              ) : (
                <span className="text-xl">0</span>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductItem;
