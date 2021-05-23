import styled from 'styled-components';
import { colors } from '../../../common/colors';
import { companyInfo } from '../../pages/AboutCompany/constants';
import { contactsInfo } from '../../pages/Contacts/constants';
import { TAG_GRID, TAG_P } from './constants';

export const InfoWrapper = styled.div`
  margin: 0 auto;
  font-family: 'Fira Sans';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const InfoHeader = styled.h1`
  margin: 0;
  padding-top: 2vw;
  font-size: 2rem;
  line-height: 1.2;
  color: ${colors.darkGrey};
`;

export const InfoTitle = styled.h4`
  margin: 1rem 0;
  font-size: 1.5rem;
  color: ${colors.darkGrey};
`;

export const InfoTextUl = styled.ul`
  ${({ tag }) => tag === TAG_P && `padding: 0`}
`;

export const InfoTextDiv = styled.div`
  ${({ tag }) =>
    tag === TAG_GRID && `display: grid; grid-template-columns: 150px 150px`}
`;

export const InfoLinks = styled.div`
  margin-bottom: 1rem;
  ${({ pageHeader, id }) =>
    (pageHeader === companyInfo.header || pageHeader === contactsInfo.header) &&
    (id === '3' || id === '4') &&
    `display: none`}
`;
