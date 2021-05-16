import { memo } from 'react';
import SiteInfo from '../../modules/SiteInfo';
import { deliveryInfo } from './constants';

type Props = {};

const Delivery: React.FC<Props> = (props) => {
  return <SiteInfo page={deliveryInfo} />;
};

export default memo(Delivery);
