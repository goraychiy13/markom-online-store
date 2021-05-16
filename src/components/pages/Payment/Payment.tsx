import { memo } from 'react';
import SiteInfo from '../../modules/SiteInfo';
import { paymentInfo } from './constants';

type Props = {};

const Payment: React.FC<Props> = (props) => {
  return <SiteInfo page={paymentInfo} />;
};

export default memo(Payment);
