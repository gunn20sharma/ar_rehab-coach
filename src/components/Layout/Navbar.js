import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">AR Rehab Coach</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        {isAuthenticated && (
          <>
            <Link to="/exercise">Exercise</Link>
            <Link to="/progress">Progress</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/camera">Camera</Link>
            <Link to="/settings">Settings</Link>
          </>
        )}
        {!isAuthenticated ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/">Logout</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;