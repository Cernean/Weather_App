import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">Profile</NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavigationBar;