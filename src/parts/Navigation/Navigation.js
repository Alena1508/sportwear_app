import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './navigation.scss';

import { setLogout } from '../../store';


export class NavigationContainer extends React.Component {
  handleLogout = () => {
    this.props.dispatch(setLogout());
  };
  render() {
    const { user } = this.props;
    return (
      <nav className="main-nav">
        {
              user ?
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
                      to="/categories"
                      activeClassName="active"
                    >
                              Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      activeClassName="active"
                    >
                              Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      activeClassName="active"
                    >
                              Contacts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/profile"
                      activeClassName="active"
                    >
                      Profile
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
                        <button onClick={() => this.handleLogout()}>Logout</button>
                      </li>
                    </ul>

                  </li>
                </ul> :
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
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      activeClassName="active"
                    >
                                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/registration"
                      activeClassName="active"
                    >
                                      Sign Up
                    </NavLink>
                  </li>

                </ul>

          }


      </nav>
    );
  }
}


const mapStoreToProps = ({ user }) => ({
  user
});

export const Navigation = connect(mapStoreToProps)(NavigationContainer);

