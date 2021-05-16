import { memo } from 'react';
import SiteAuth from '../../modules/SiteAuth';
import { authSignIn } from './constants';

type Props = {};

const SignIn: React.FC<Props> = (props) => {
  return <SiteAuth page={authSignIn} />;
};

export default memo(SignIn);
