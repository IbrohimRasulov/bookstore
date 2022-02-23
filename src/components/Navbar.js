import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <div className="links">
      <Link to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </div>
  </nav>
);

export default Navbar;
