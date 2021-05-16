import { memo } from 'react';
import SiteAuth from '../../modules/SiteAuth';
import { forgottenPassword } from './constants';

type Props = {};

const ForgottenPassword: React.FC<Props> = (props) => {
  return <SiteAuth page={forgottenPassword} />;
};

export default memo(ForgottenPassword);
