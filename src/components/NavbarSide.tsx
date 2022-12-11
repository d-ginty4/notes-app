import {
  faTimes,
  faUserCircle,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavbarSide = () => {
  return (
    <div>
      <div className="has-background-info-light has-text-centered sideNav">
        <span className="delete is-large mt-3 ml-3 sideNav__close-btn">
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className="pt-6">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faUserCircle}
                className="sideNav__user-icon"
              />
            </li>
            <li>
              <span className="is-size-1 has-text-weight-bold">User</span>
            </li>
            <br />
            <li>
              <Link
                to={"/settings"}
                className="is-size-3 has-text-weight-bold has-text-dark"
              >
                <FontAwesomeIcon icon={faCog} />
                Settings
              </Link>
            </li>
            <li>
              <Link
                to={"/landing"}
                className="is-size-3 has-text-weight-bold has-text-dark"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarSide;
