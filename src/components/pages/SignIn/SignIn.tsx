import { memo } from 'react';
import SiteAuth from '../../modules/SiteAuth';
import { signIn } from './constants';

const SignIn: React.FC = (props) => {
  return <SiteAuth page={signIn} />;
};

export default memo(SignIn);
