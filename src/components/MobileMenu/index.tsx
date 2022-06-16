import React from 'react';
import { Link } from 'react-router-dom';

import { useProducts } from '../../context/Products';

import { Container } from './styles';

interface IMobileMenuProps {
  opened: boolean;
}

export default function MobileMenu({ opened }: IMobileMenuProps) {
  const { categories } = useProducts();
  return (
    <Container opened={opened}>
      {categories?.map(category => (
        <Link key={category} to={`/${category}`}>
          {category}
        </Link>
      ))}
    </Container>
  );
}
