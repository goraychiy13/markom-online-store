import styled from 'styled-components';
import { colors } from '../../../../common/colors';

export const StyledCurrentPage = styled.div`
  color: ${colors.grey};
  font-size: 16px;
  margin: 13px 0 30px 0;
  ${({ isDisplayed }) => `display: ${isDisplayed ? 'block' : 'none'}`};
`;
export const HomePageLink = styled.span`
  margin-right: 15px;
  cursor: pointer;
`;

export const CurrentPageLink = styled.span`
  margin-left: 15px;
`;
