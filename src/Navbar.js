import { Link } from 'react-router-dom';
import "./css/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h1>ArticleX</h1></Link>
            <div className="links">
            </div>
        </nav>
    );
};

export default Navbar;