import { memo } from 'react';
import SiteInfo from '../../modules/SiteInfo';
import { companyInfo } from './constants';

type Props = {};

const AboutCompany: React.FC<Props> = (props) => {
  return <SiteInfo page={companyInfo} />;
};

export default memo(AboutCompany);
