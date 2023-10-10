import React from 'react'
import ProductsFilter from '../components/products/ProductsFilter'
import ProductsList from '../components/products/ProductsList'
import ProductsPriceRangeFilter from '../components/products/ProductsPriceRangeFilter'
import ProductsRatingSort from '../components/products/ProductsRatingSort'
import ProductsSearch from '../components/products/ProductsSearch'
import { getProducts } from '../store/products/productsActions';
import { clearAllFilters } from '../store/products/productsSlice';
import { useDispatch } from 'react-redux'


const ProductsPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className='flex flex-row justify-around'>
          <ProductsSearch />
          <ProductsPriceRangeFilter />
          <ProductsRatingSort />
          <ProductsFilter />
          <button onClick={() => {
            dispatch(clearAllFilters());
            dispatch(getProducts());
          }}>Clear all filters</button>
      </div>
        <ProductsList />
    </div>
  )
}

export default ProductsPage

