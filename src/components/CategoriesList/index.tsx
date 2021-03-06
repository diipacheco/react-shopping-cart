import React, { useEffect } from 'react';

import { useProducts } from '../../context/Products';

import { Container } from './styles';

export default function CategoriesList() {
  const { categories, fetchCategories } = useProducts();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <Container>
      <nav data-testid="categories-list">
        {categories?.map(category => (
          <li data-testid="content-categories-list" key={category}>
            {category}
          </li>
        ))}
      </nav>
    </Container>
  );
}
