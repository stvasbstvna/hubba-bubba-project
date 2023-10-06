import React from 'react'
import ProductsFilter from '../components/products/ProductsFilter'
import ProductsList from '../components/products/ProductsList'
import ProductsSearch from '../components/products/ProductsSearch'


const ProductsPage = () => {
  return (
    <div>
      <div className='flex flex-row justify-around'>
          <ProductsSearch />
          <ProductsFilter />
      </div>
        <ProductsList />
    </div>
  )
}

export default ProductsPage

