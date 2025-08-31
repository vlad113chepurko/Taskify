import './styles/_Navigation.scss';
import "@layouts/header/_Header.scss";
import useThemeStore from "@store/useThemeStore";
import components from "@components/components";
import images from './assets/index';
import { useNavigate } from "react-router-dom";



import darkLogo from '@assets/dark-logo.png';
import lightLogo from '@assets/light-logo.png';

const Navigation = () => {
  const navigate = useNavigate();
  const { theme } = useThemeStore();
  return (
      <nav className="navigation">
        <section className="navigation__section">
          <i
            onClick={() => navigate('/')}
            id={'logo'}
            className={"header__logo-container"}>
            <img
              src={ theme === 'light' ? lightLogo : darkLogo }
              alt="logo"
            />
          </i>
          <components.ToggleTheme />
        </section>
        <span className={"header__line"}></span>
        <div onClick={() => navigate('/tasks')} className="navigation__item">
          <img
            src={ theme === 'dark' ? images.taskWhite :  images.taskDark }
            alt="tasks"
            width={30}
            height={30}
          />
          My tasks
        </div>
        <div onClick={() => navigate('/add')} className="navigation__item">
          <img
            src={ theme === 'dark' ? images.addWhite :  images.addDark }
            alt="add"
            width={30}
            height={30}
          />
          Add new task
        </div>
        <div
          onClick={() => navigate('/tags')}
          className="navigation__item">
          <img
            src={ theme === 'dark' ? images.tagWhite :  images.tagDark }
            alt="remove"
            width={30}
            height={30}
          />
          My tags 
        </div>
      </nav>
  )
}

export default Navigation;
