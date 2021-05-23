import { memo } from 'react';
import SiteInfo from '../../modules/SiteInfo';
import { companyInfo } from './constants';

const AboutCompany: React.FC = (props) => {
  return <SiteInfo page={companyInfo} />;
};

export default memo(AboutCompany);
