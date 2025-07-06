import { useEffect } from "react";
import { Outlet } from 'react-router-dom';
import useChangeTheme from "@hooks/useChangeTheme";
import layouts from "@layouts/layouts";


function App() {
  const { initTheme } = useChangeTheme();

  useEffect(() => {
    initTheme();
  }, []);

  return (
      <>
        <layouts.Header />
        <Outlet />
        <layouts.Footer />
      </>
  );
}

export default App;
