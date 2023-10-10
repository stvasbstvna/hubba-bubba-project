import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from '../../store/products/productsActions';
import { changeCategory } from '../../store/products/productsSlice';

const ProductsFilter = () => {
  const { categories, currentCategory } = useSelector(state => state.products);
  const [category, setCategory] = useState('all');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(changeCategory({ category }));
    dispatch(getProducts());
  }, [category]);

  useEffect(() => {
    if(!currentCategory) {
      setCategory('all');
    };
  }, [currentCategory]);
   
  return (
    <div className="w-1/6">
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className="mt-1.5 w-full h-9 rounded-lg bg-pink-500 text-white sm:text-sm"
      >
        <option value="all">all</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductsFilter;
