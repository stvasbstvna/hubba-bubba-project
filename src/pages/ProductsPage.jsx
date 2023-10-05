import React from 'react'
import ProductsFilter from '../components/products/ProductsFilter'
import ProductsList from '../components/products/ProductsList'
import ProductsSearch from '../components/products/ProductsSearch'


const ProductsPage = () => {
  return (
    <div>
        <ProductsSearch />
        <ProductsFilter />
        <ProductsList />
    </div>
  )
}

export default ProductsPage

