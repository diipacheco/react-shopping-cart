import React, { useEffect } from 'react';

import { useCart } from '../../../context/Cart';

import { useProducts } from '../../../context/Products';

import {
  Container,
  ProductInfo,
  ProductPrice,
  ProductCategory,
  ButtonContainer,
} from './styles';

export default function ProductItem() {
  const { fetchProducts, products } = useProducts();
  const { addToCart } = useCart();

  const currencyFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {products?.map(product => (
        <Container key={product.id}>
          <img src={product.image} alt={product.title} />
          <ProductInfo>
            <ProductPrice>
              {currencyFormatter.format(product.price)}
            </ProductPrice>
            <h4>{product.title}</h4>
            <ProductCategory>{product.category}</ProductCategory>
          </ProductInfo>
          <ButtonContainer>
            <button onClick={() => addToCart(product.id)} type="button">
              Add to Cart
            </button>
          </ButtonContainer>
        </Container>
      ))}
    </>
  );
}
