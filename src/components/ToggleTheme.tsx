import { useCallback } from 'react';
import '@layouts/header/_Header.scss';
import sun from '@assets/sun.svg';
import moon from '@assets/moon.png';
import useChangeTheme from '@hooks/useChangeTheme';

const ToggleTheme = () => {

  const { theme, toggleTheme } = useChangeTheme();

  const onToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <div className="header__container-right">
      <i onClick={onToggle} className="header__circle">
        <img
          src={theme === 'light' ? sun : moon}
          alt={theme === 'light' ? 'sun' : 'moon'}
          width={30}
          height={30}
        />
      </i>
    </div>
  );
};

export default ToggleTheme;
