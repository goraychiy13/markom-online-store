import { memo } from 'react';
import SiteAuth from '../../modules/SiteAuth';
import { authSignUp } from './constants';

type Props = {};

const SignUp: React.FC<Props> = (props) => {
  return <SiteAuth page={authSignUp} />;
};

export default memo(SignUp);
