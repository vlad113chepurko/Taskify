import './styles/_Navigation.scss';
import "@layouts/header/_Header.scss";
import useThemeStore from "@store/useThemeStore";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




import darkLogo from '@assets/dark-logo.png';
import lightLogo from '@assets/light-logo.png';

const Navigation = () => {
  const navigate = useNavigate();
  const { theme } = useThemeStore();
  return (
    <div className={"header__container-left"}>
      <nav className="navigation">
        <i
          onClick={() => navigate('/')}
          id={'logo'}
          className={"header__logo-container"}>
          <img
            src={ theme === 'light' ? lightLogo : darkLogo }
            alt="logo"
          />
        </i>
        <Link to="/tasks">My tasks</Link>
        <Link to="/add">Add new task</Link>
        <Link to="/completed">Completed tasks</Link>
        <Link to="/deleted">Deleted tasks</Link>
      </nav>
    </div>
  )
}

export default Navigation;