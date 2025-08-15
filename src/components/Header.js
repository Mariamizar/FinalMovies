import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <nav>
      <a href="#" className="title">
        FinalMovies
      </a>
      <div className="end">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">Tv Series</a>
      </div>
    </nav>
  );
}

export default Header;
