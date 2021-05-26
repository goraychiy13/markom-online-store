import { memo } from 'react';
import { BannerImage, Container, Footer } from './style';

type Props = {
  bannerImage: string;
  name: string;
  width: string;
  height: string;
  imageHeight: string;
};

function Banner(props: Props): JSX.Element {
  return (
    <Container width={props.width} data-name="container">
      <BannerImage
        alt=""
        src={props.bannerImage}
        width={props.width}
        height={props.imageHeight}
        data-name="banner-image"
      />
      <Footer data-name="footer">{props.name}</Footer>
    </Container>
  );
}

export default memo(Banner);
