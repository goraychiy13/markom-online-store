import { memo } from 'react';
import SiteAuth from '../../modules/SiteAuth';
import { forgottenPassword } from './constants';

const ForgottenPassword: React.FC = (props) => {
  return <SiteAuth page={forgottenPassword} />;
};

export default memo(ForgottenPassword);
