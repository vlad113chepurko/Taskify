import './styles/_Navigation.scss';
import "@layouts/header/_Header.scss";
import {Link} from 'react-router-dom';
import logo from '@assets/logo.png';
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/')} className={"header__container-left"}>
      <nav className="navigation">
        <i className={"header__logo-container"}>
          <img
            src={logo}
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