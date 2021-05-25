import { memo } from 'react';
import { StyledImage } from './style';

type Props = {
  src: string;
  alt: string;
  height?: string;
  width?: string;
  margin?: string;
  objectFit?: string;
  verticalAlign?: string;
  aspectRatio?: string;
  cursor?: string;
};

const Img: React.FC<Props> = (props) => {
  return (
    <StyledImage
      src={props.src}
      alt={props.alt}
      height={props.height}
      width={props.width}
      margin={props.margin}
      objectFit={props.objectFit}
      verticalAlign={props.verticalAlign}
      aspectRatio={props.aspectRatio}
      cursor={props.cursor}
      data-name="styled-img"
    />
  );
};

export default memo(Img);
