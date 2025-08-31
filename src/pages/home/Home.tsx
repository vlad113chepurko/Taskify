import "./styles/_Home.scss";
import { useEffect } from 'react';
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Welcome to Taskify";
  }, [])

  return (
    <div className="home">
      <h1 className="typing">
        Welcome here, now let's create your tasks! Your journey to productivity
        begins.
      </h1>
      <button onClick={() => navigate("/tasks")} className="second__button">
        Create tasks
      </button>
    </div>
  );
};

export default Home;
