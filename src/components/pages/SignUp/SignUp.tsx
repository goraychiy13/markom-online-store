import { memo } from 'react';
import SiteAuth from '../../modules/SiteAuth';
import { signUp } from './constants';

type Props = {};

const SignUp: React.FC<Props> = (props) => {
  return <SiteAuth page={signUp} />;
};

export default memo(SignUp);
