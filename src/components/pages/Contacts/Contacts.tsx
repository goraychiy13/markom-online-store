import { memo } from 'react';
import SiteInfo from '../../modules/SiteInfo';
import { contactsInfo } from './constants';

type Props = {};

const Contacts: React.FC<Props> = (props) => {
  return <SiteInfo page={contactsInfo} />;
};

export default memo(Contacts);
