import { memo } from 'react';
import SiteAuth from '../../modules/SiteAuth';
import { signUp } from './constants';

const SignUp: React.FC = (props) => {
  return <SiteAuth page={signUp} />;
};

export default memo(SignUp);
