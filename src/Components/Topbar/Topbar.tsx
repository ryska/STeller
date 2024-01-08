import Icon from '../Icon/Icon';
import User from '../User/User';
import Logo from './Logo/Logo';
import './Topbar.scss';


const Topbar = () => {
  return (
    <div className="topbar">
      <div className='logopic'>
        <a href='/'>
            <Logo />
        </a>
      </div>
      <div className='links'>
        <Icon name="question-mark" color='#ffffff'/>
        <User />
      </div >
    </div >
  );
}

export default Topbar;