import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRangeState } from '../../store/products/productsSlice';
import { getProducts } from '../../store/products/productsActions';

const ProductsPriceRangeFilter = () => {
    const { priceRange } = useSelector(state => state.products);
    const [priceRangeVal, setPriceRangeVal] = useState({
        minPrice: '',
        maxPrice: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
      if(!priceRange) {
        setPriceRangeVal({
          minPrice: '',
          maxPrice: ''
        });
      }
    }, [priceRange]);

  return (
    <div>
        <input type="number" placeholder="Min price" onChange={(e) => setPriceRangeVal({ ...priceRangeVal, minPrice: +e.target.value })} value={priceRangeVal.minPrice} />
        <span>---</span>
        <input type="number" placeholder="Max price" onChange={(e) => setPriceRangeVal({ ...priceRangeVal, maxPrice: +e.target.value })} value={priceRangeVal.maxPrice} />
        <button onClick={() => {
            dispatch(setPriceRangeState(priceRangeVal));
            dispatch(getProducts());
        }}>Apply</button>
    </div>
  )
}

export default ProductsPriceRangeFilter