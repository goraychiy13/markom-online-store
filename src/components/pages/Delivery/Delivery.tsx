import { memo } from 'react';
import SiteInfo from '../../modules/SiteInfo';
import { deliveryInfo } from './constants';

const Delivery: React.FC = (props) => {
  return <SiteInfo page={deliveryInfo} />;
};

export default memo(Delivery);
