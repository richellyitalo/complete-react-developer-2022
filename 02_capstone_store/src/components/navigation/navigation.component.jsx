import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">Logo</Link>
      </div>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
