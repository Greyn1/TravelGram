import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import './NavLinks.css';

const NavLinks = () => {
    const {isLoggedIn, logout} = useContext(AuthContext);
  return (
    <ul className='nav-links' >
        <li>
            <NavLink to="/">All Users</NavLink>
        </li>
          {
              isLoggedIn && (
                  <li>
                      <NavLink to="/u1/places">My Places</NavLink>
                  </li>)
          }
          {
              isLoggedIn && (
                  <li>
                      <NavLink to="/places/new">Add Place</NavLink>
                  </li>)
          }
          {
              !isLoggedIn && (
                  <li>
                      <NavLink to="/auth">Authenticate</NavLink>
                  </li>
              )
          }
          {
              isLoggedIn && (
                  <li>
                      <button onClick={logout}>Logout</button>
                  </li>
              )
          }
    </ul>
  );
}

export default NavLinks;
