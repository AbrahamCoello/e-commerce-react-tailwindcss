/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

function NavItem({ to, children, activeStyle }) {
  return (
    // Use la etiqueta NavLink y le pasé las propiedades to y className
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
