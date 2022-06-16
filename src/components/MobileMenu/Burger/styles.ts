import styled from 'styled-components';

interface IContainerProps {
  opened: boolean;
}

export const Container = styled.button<IContainerProps>`
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 26px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  display: none;

  @media only screen and (max-width: 425px) {
    display: flex;
  }

  @media only screen and (max-width: 320px) {
    width: 16px;
    height: 26px;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 4px;
    background: var(--dark-orange);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ opened }) => (opened ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ opened }) => (opened ? '0' : '1')};
      transform: ${({ opened }) =>
        opened ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ opened }) => (opened ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
