import styled from 'styled-components';

export const StyledHeader = styled.ul`
  display: flex;
  padding-left: 0;
`;

export const StyledLink = styled.li`
  list-style: none;

  &:first-child a {
    color: green !important;
  }

  a {
    text-decoration: none;
    color: #333333;
    cursor: pointer;
    margin: 0 8px;

    &:hover {
      color: #fc8989;
    }
  }
`;
