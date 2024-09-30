import { Link } from 'react-router-dom';
import "./css/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>News Project</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Article</Link>
            </div>
        </nav>
    );
};

export default Navbar;