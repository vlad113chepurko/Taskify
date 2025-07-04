import './styles/_Navigation.scss';
import "@layouts/header/_Header.scss";
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={"header__container-left"}>
      <nav className="navigation">
        <h1 className={'header__logo'}>To-do List</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Navigation;