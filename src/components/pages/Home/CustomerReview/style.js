import style from 'components/Layout/Header/Searchbar/style';
import styled from 'styled-components';
import { colors } from '../../../../common/colors';

export const Container = styled.div`
    background-color: ${colors.minorShade};
    width: 388px;
    padding: 30px 30px 20px;
`

export const CustomerReviewerName = styled.span`
    font-size: 24px;
    font-weight: 600;
`

export const CustomerReviewBody = styled.p`
    margin-bottom: 16px;
    font-size: 16px;
`