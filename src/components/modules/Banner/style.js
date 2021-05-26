import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 1px solid ${colors.minorShade};
  cursor: pointer;
  border-radius: 4px;
  ${({ width }) => `width: ${width}`};
  ${({ height }) => `height: ${height}`};
`;

export const BannerImage = styled.img`
  border-radius: 4px 4px 0 0;
`;

export const Footer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  font-size: 24px;
`;
