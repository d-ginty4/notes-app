import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faProjectDiagram,
  faCalendarAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface Props{

}

export const Navbar: React.FC<Props> = () => {
  return (
    <>
      <nav className="navbar is-fixed-top is-size-4 has-text-weight-bold has-background-primary ">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/" className="navbar-link">
              <FontAwesomeIcon className="mr-3" icon={faHouse} />
              Home
            </Link>

            <div className="navbar-dropdown has-background-info-light">
              <Link to="/calendar" className="navbar-item is-size-5">
                <FontAwesomeIcon className="mr-3" icon={faCalendarAlt} />
                Calender
              </Link>
              <hr className="dropdown-divider" />
              <Link to="/projects" className="navbar-item is-size-5">
                <FontAwesomeIcon className="mr-3" icon={faProjectDiagram} />
                Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <a className="navbar-item is-size-4">
            User <FontAwesomeIcon className="ml-3" icon={faUser} />
          </a>
        </div>
      </nav>
    </>
  );
};
