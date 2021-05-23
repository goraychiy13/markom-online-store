import { memo } from 'react';
import SiteInfo from '../../modules/SiteInfo';
import { contactsInfo } from './constants';

const Contacts: React.FC = (props) => {
  return <SiteInfo page={contactsInfo} />;
};

export default memo(Contacts);
