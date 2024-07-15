import { NavLink } from 'react-router-dom';

function ProductSidebar() {
  return (
    <nav className="sb-nav">
      <ul className="sb-nav__links">
        <li className="sb-nav__link--wrapper">
          <NavLink to="/products" end className={`sb-nav__link `}>
            All Products
          </NavLink>
        </li>
        <li className="sb-nav__link--wrapper">
          <NavLink to="/products/black" className="sb-nav__link">
            black
          </NavLink>
        </li>
        <li className="sb-nav__link--wrapper">
          <NavLink to="/products/white" className="sb-nav__link">
            white
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default ProductSidebar;
