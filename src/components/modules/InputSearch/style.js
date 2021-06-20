import styled from 'styled-components';
import { colors } from '../../../common/colors';
import { searchIcon } from '../../../icons';

export const StyledInputSearch = styled.form`
  display: flex;
  margin: 0 45px 0 25px;
  width: 725px;
`;

export const inputSearchStyles = {
  height: '35.22px',
  padding: '0',
  borderRadius: '5px 0 0 5px',
};

export const buttonStyles = {
  hasIcon: true,
  width: '50px',
  height: '50px',
  iconWidth: '35px',
  iconHeight: '35px',
  backgroundColor: colors.darkGreen,
  backgroundColorModifier: colors.minorGreen,
  icon: searchIcon,
  borderRadius: '0 5px 5px 0',
  type: 'submit',
};
