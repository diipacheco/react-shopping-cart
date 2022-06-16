import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;

  padding: 20px 0;

  > li {
    list-style: none;
    color: var(--dark-orange);
    font-size: 14px;
    font-weight: 700;
  }
`;
