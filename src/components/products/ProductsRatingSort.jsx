import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsActions';
import { setSortByRating } from '../../store/products/productsSlice';

const ProductsRatingSort = () => {
    const { sortByRating } = useSelector(state => state.products);
    const [sortBy, setSortBy] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setSortByRating({ sortByRating: sortBy }));
      dispatch(getProducts());
    }, [sortBy]);

    useEffect(() => {
      if(!sortByRating) {
        setSortBy('');
      };
    }, [sortByRating]);

  return (
    <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="">No sort</option>
        <option value="asc">From highest to lowest</option>
        <option value="desc">From lowest to highest</option>
    </select>
  )
}

export default ProductsRatingSort