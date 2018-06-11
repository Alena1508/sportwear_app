import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './navigation.scss';
// import { setLogout } from '../../store';


export class NavigationContainer extends React.Component {
  render() {
    return (
      <nav className="main-nav">
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="active"
            >
                  Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              activeClassName="active"
            >
                  Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              activeClassName="active"
            >
                  Contacts
            </NavLink>

            <ul className="sub-menu">
              <li>
                <NavLink
                  to="/change-user"
                  activeClassName="active"
                >
                      Profile
                </NavLink>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>

          </li>
        </ul>
      </nav>
    );
  }
}


const mapStoreToProps = ({ user }) => ({
  user
});

export const Navigation = connect(mapStoreToProps)(NavigationContainer);

