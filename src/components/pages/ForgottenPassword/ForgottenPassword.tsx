import { memo } from 'react';
import SiteAuth from '../../modules/SiteAuth';
import { authForgottenPassword } from './constants';

type Props = {};

const ForgottenPassword: React.FC<Props> = (props) => {
  return <SiteAuth page={authForgottenPassword} />;
};

export default memo(ForgottenPassword);
