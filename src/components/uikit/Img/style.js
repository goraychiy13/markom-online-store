import styled from 'styled-components';

export const StyledImage = styled.img`
  ${({ height }) => `height: ${height ?? `auto`}`};
  ${({ width }) => `width: ${width ?? `auto`}`};
  ${({ margin }) => `margin: ${margin ?? `auto`}`};
  ${({ objectFit }) => `object-fit: ${objectFit ?? `fill`}`};
  ${({ verticalAlign }) => `vertical-align: ${verticalAlign ?? `baseline`}`};
  ${({ aspectRatio }) => `aspect-ratio: ${aspectRatio ?? `auto`}`};
  ${({ cursor }) => `cursor: ${cursor ?? `auto`}`};
`;
