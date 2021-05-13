import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavbarWrapper = styled.div`
  background-color: #f7f7f7;
  /* ${({ color }) => `color: ${color}`}; */
  height: 43.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 16px 'Fira Sans';
  position: absolute;
  left: 0;
  min-width: 100%;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1408px;
`;
