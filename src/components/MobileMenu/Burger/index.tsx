import React from 'react';

import { Container } from './styles';

interface IBurgerButtonProps {
  opened: boolean;
  setOpenedMenu(value: boolean): void;
}

export default function BurgerButton({
  opened,
  setOpenedMenu,
}: IBurgerButtonProps) {
  return (
    <Container opened={opened} onClick={() => setOpenedMenu(!opened)}>
      <div />
      <div />
      <div />
    </Container>
  );
}
