import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar bg-neutral text-neutral-content mb-12 shadow-lg">
      <div className="container mx-auto">
        <div className="mx-2 flex-none px-2">
          <Link to="/" className="align-middle text-lg font-bold">
            {title}
          </Link>
        </div>

        <div className="mx-2 flex-1 px-2">
          <div className="flex-justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder"
};

Navbar.propTypes = {
  title: PropTypes.string
};

export default Navbar;
