import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, deleteProduct } from '../../store/products/productsActions';
import { clearOneProductState } from '../../store/products/productsSlice';
import { checkUserLogin } from '../../helpers/functions';
import { toggleProductToCart, CheckProductInCart } from '../../store/cart/cartActions';

const ProductDetails = () => {
    const { loading, oneProduct } = useSelector(state => state.products);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getOneProduct({ id }));
        return () => dispatch(clearOneProductState());
    }, []);
    
  return (
    <>
        {loading ? (
            <h3>Loading...</h3>
        ) : (
            <>
                {oneProduct && (
                    <div>
                        <img src={oneProduct.picture} alt={oneProduct.name} width="250" height="250" />
                        <h3>{oneProduct.name}</h3>
                        <h3>${oneProduct.price}</h3>
                        <p>{oneProduct.description}</p>
                        {checkUserLogin() && (
                            <div>
                                <button onClick={() => navigate(`/product-edit/${oneProduct.id}`)}>Edit ---</button>
                                <button onClick={() => {
                                    dispatch(deleteProduct({ id: oneProduct.id }));
                                    navigate('/products');
                                }}>--- Delete</button>
                                <button onClick={() => toggleProductToCart(oneProduct)}>{CheckProductInCart() ? 
                                    'remove from cart': 'add to cart'}</button>

                            </div>
                        )}
                    </div>
                )}
            </>
        )}
    </>
  )
}

export default ProductDetails


