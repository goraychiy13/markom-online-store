import { colors } from '../../../../common/colors';
import styled from 'styled-components';

export const Static = styled.div`
  display: flex;
  align-items: center;
`;

export const StaticItem = styled.div`
  ${({ color }) => `color: ${color}`};
  margin-right: 25px;
`;

export const StyledLanguages = styled.div`
  display: flex;
  color: ${colors.grey};
  div {
    &:first-child {
      padding-left: 0;
      color: ${colors.green};
    }
    &:last-child {
      border-right: none !important;
    }
  }
`;

export const Language = styled.div`
  border-right: 1px solid ${colors.grey};
  padding: 0 15px;
  cursor: pointer;
  &:hover {
    color: #fc8989;
  }
`;
