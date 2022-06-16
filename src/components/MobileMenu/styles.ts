import styled from 'styled-components';

interface IContainerProps {
  opened: boolean;
}

export const Container = styled.nav<IContainerProps>`
  display: ${({ opened }) => (opened ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--brown);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 425px) {
    display: none;
  }

  @media (max-width: 425px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 15px 0;
    font-weight: bold;
    color: var(--white);

    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 425px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: var(--orange);
    }
  }
`;
