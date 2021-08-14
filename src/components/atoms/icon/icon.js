import user from '../../../assests/svg-icons/user.svg';
import search from '../../../assests/svg-icons/search.svg';
import checkout from '../../../assests/svg-icons/checkout.svg';

import './icon.scss';

const getSvgIcon = (name) => {
  switch (name) {
    case 'user':
      return user;
    case 'search':
      return search;
    case 'checkout':
      return checkout;
    default:
      return null;
  }
};

const Icon = ({ name = 'user' }) => {
  return <img className='icon' src={getSvgIcon(name)}></img>;
};

export default Icon;
