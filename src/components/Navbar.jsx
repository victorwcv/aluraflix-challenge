import { Link, NavLink } from "react-router-dom";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src="/logo.png" alt="aluraflix logo" className="header__logo" />
        <nav className="header__nav">
          <NavLink to="/" className='btn btn--primary'>
            HOME
          </NavLink>
          <NavLink to="/new-video" className='btn btn--primary'>
            NUEVO VIDEO
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
