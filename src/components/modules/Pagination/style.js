import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const PaginationWrapper = styled.div`
  margin: 1vw 0;
  display: flex;
  font-size: 1.1rem;
`;

export const toggleButtonStyles = {
  height: '30px',
  margin: '0 0.5rem 0 0',
  padding: '0 0.8rem',
  fontSize: '12px',
  borderRadius: '6px',
  color: colors.darkGreen,
  boxShadowModifier: '0 0 0 1px inset' + colors.darkGreen,
  backgroundColor: colors.gray93,
};

export const currentButtonStyles = {
  height: '30px',
  margin: '0 0.5rem 0 0',
  padding: '0 0.8rem',
  borderRadius: '6px',
  color: colors.white,
  boxShadowModifier: 'none',
  backgroundColor: colors.darkGreen,
  backgroundColorModifier: colors.minorGreen,
};

export const paginationButtonStyles = {
  height: '30px',
  margin: '0 0.5rem 0 0',
  padding: '0 0.8rem',
  borderRadius: '6px',
  color: colors.darkGrey,
  boxShadowModifier: '0 0 0 1px inset' + colors.darkGreen,
  backgroundColor: colors.gray93,
  backgroundColorModifier: colors.gray93,
};
