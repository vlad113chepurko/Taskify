import './_Header.scss';
import components from "@components/components";

const Header = () => {
  return (
    <header className="header">
      <components.Navigation />
    </header>
  );
};

export default Header;