import React, { Suspense } from 'react';
import SkeletonLoader from 'tiny-skeleton-loader-react';

import { useProducts } from '../../context/Products';

import ProductItem from './ProductItem';
import { Container } from './styles';

export default function ProductsList() {
  const { loading } = useProducts();
  return (
    <Container>
      {loading && (
        <>
          {Array.from(Array(20).keys()).map(i => (
            <SkeletonLoader
              key={i}
              width="200px"
              height="221px"
              background="rgba(0, 0, 0, 0.2)"
              style={{
                marginTop: '65px',
              }}
            />
          ))}
        </>
      )}
      <ProductItem />
    </Container>
  );
}
