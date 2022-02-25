import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="content-align">
      <h1>Bookstore CMS</h1>
      <div className="links">
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </div>
      <img src="" alt="user-logo" />
    </div>
  </nav>
);

export default Navbar;
