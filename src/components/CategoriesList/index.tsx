import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useProducts } from '../../context/Products';

import { Container } from './styles';

export default function CategoriesList() {
  const { categories, fetchCategories } = useProducts();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <Container data-testid="categories-list">
      <nav>
        {categories?.map(category => (
          <li data-testid="content-categories-list" key={category}>
            <Link to={`/${category}`}>{category}</Link>
          </li>
        ))}
      </nav>
    </Container>
  );
}
