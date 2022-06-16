import styled from 'styled-components';

export const Container = styled.div`
  &:before {
    top: -8px;
    right: 10px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid var(--white);
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    z-index: 1;
  }

  z-index: 2;
  display: block;
  position: absolute;
  top: 48px;
  right: 0;
  width: 360px;
  height: 388px;
  background-color: var(--white);
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
`;
