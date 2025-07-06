import "./styles/_Home.scss";
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    document.title = "Welcome to Taskify";
  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;