import { memo } from 'react';
import SiteAuth from '../../modules/SiteAuth';
import { signIn } from './constants';

type Props = {};

const SignIn: React.FC<Props> = (props) => {
  return <SiteAuth page={signIn} />;
};

export default memo(SignIn);
