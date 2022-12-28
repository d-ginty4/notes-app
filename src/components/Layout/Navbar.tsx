/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../../hooks/context";
import { navItems as Items } from "../../data/nav-items";

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { page } = useGlobalContext();

  // Click events
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <>
      <nav className="navbar is-fixed-top is-size-4 has-text-weight-bold has-background-primary ">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">
              {/* <FontAwesomeIcon className="mr-3" icon={faHouse} /> */}
              {page === "/"
                ? "Home"
                : page.substring(1).charAt(0).toUpperCase() + page.substring(2)}
            </span>

            <div className="navbar-dropdown has-background-info-light">
              {Items.map((item, index) => {
                const { path, page, icon} = item;
                return (
                  <Link to={path} className="navbar-item is-size-5">
                    <FontAwesomeIcon className="mr-3" icon={icon} />
                    {page}
                  </Link>
                );
              })}
              {/* <Link to="/" className="navbar-item is-size-5">
                <FontAwesomeIcon className="mr-3" icon={faHouse} />
                Home
              </Link>
              <hr className="dropdown-divider" />
              <Link to="/calendar" className="navbar-item is-size-5">
                <FontAwesomeIcon className="mr-3" icon={faCalendarAlt} />
                Calender
              </Link>
              <hr className="dropdown-divider" />
              <Link to="/projects" className="navbar-item is-size-5">
                <FontAwesomeIcon className="mr-3" icon={faProjectDiagram} />
                Projects
              </Link> */}
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <a
            className={`${
              isSidebarOpen
                ? "navbar-item is-size-4 sidebar-button move"
                : "navbar-item is-size-4 sidebar-button"
            }`}
            onClick={openSidebar}
          >
            User <FontAwesomeIcon className="ml-3" icon={faUser} />
          </a>
        </div>
      </nav>
    </>
  );
};
