import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ( { auth: { user, isAuth },logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />Welcome {''}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="!#">
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
   </ul>
  );

  const GuestLinks = (
    <ul>
      <li><a href="profiles.html">Developers</a></li>
      <li><a href="/survey">Survey</a></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );
    return (
      <nav className="navbar bg-dark">
        <h1>
          <a href="!#"><i className="fas fa-code"></i> DeveloperPort</a>
        </h1>
        { isAuth ? authLinks : GuestLinks }
      </nav>
    )
}

Navbar.propTypes = {
  auth: PropTypes.bool,
  logout:PropTypes.func.isRequired
}

const mapStatetoProps = state => ({
  auth: state.register
});

export default connect(mapStatetoProps, { logout }) (Navbar);