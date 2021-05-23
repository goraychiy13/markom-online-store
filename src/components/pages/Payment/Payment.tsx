import { memo } from 'react';
import SiteInfo from '../../modules/SiteInfo';
import { paymentInfo } from './constants';

const Payment: React.FC = (props) => {
  return <SiteInfo page={paymentInfo} />;
};

export default memo(Payment);
