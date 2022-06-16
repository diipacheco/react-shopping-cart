import React from 'react';

import { Container } from './styles';

interface IMobileMenuProps {
  opened: boolean;
}

export default function MobileMenu({ opened }: IMobileMenuProps) {
  return (
    <Container opened={opened}>
      <a href="/mens">Mens Clouting</a>
      <a href="/women">Women Clouting</a>
    </Container>
  );
}
