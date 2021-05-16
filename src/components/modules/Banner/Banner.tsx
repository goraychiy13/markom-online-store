import { memo } from 'react';
import { Container, BannerImage, Footer } from './style';

type Props = {
  bannerImage: string;
  name: string;
  width: string;
  height: string;
  imageHeight: string;
};

function Banner(props: Props): JSX.Element {
  return (
    <Container width={props.width}>
      <BannerImage
        alt=""
        src={props.bannerImage}
        width={props.width}
        height={props.imageHeight}
      />
      <Footer>{props.name}</Footer>
    </Container>
  );
}

export default memo(Banner);
