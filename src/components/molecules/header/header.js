import Icon from '../../atoms/icon/icon';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <h1>littleTAGs</h1>
      <nav>
        <ul>
          <li>
            <a href='#'>About us</a>
          </li>
          <li>
            <a href='#'>Women</a>
          </li>
          <li>
            <a href='#'>Men</a>
          </li>
          <li>
            <a href='#'>Accessories</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <Icon name='search' />
        <Icon name='user' />
        <Icon name='checkout' />
      </div>
    </header>
  );
};

export default Header;
