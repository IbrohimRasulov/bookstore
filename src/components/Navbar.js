/* eslint-disable react/jsx-key */
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="content-align">
      <h1>Bookstore CMS</h1>
      <div className="links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          BOOKS
        </NavLink>
        <NavLink to="/categories" className={({ isActive }) => (isActive ? 'active' : '')}>CATEGORIES</NavLink>
      </div>
      <img src="/user-large-solid.svg" alt="user-logo" />
    </div>
  </nav>
);

export default Navbar;
