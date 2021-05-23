import styled from 'styled-components';
import { colors } from '../../../../common/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 680px;
    align-items: center;
    margin: 0 auto;
`
export const Title = styled.h1`
    margin-bottom: 20px;
    color: ${colors.darkGrey};
    font-size: 32px;
`;

export const NameEmailWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 32px;
`

export const buttonStyles = {
    width: '250px',
    height: '50px',
    backgroundColor: colors.darkGreen,
    colorModifier: colors.minorGreen,
    type: "button",
    fontSize: '20px',
    fontWeight: 'normal',
    margin: '20px 0 48px 0',
}