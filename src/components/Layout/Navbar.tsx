/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { navItems as Items } from "../../data/nav-items";

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
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
              {Items.map((item, index) => {
                const { path, page, icon } = item;
                if (path === window.location.pathname) {
                  return (
                    <>
                      <FontAwesomeIcon className="mr-3" icon={icon} /> {page}
                    </>
                  );
                } else {
                  return "";
                }
              })}
            </span>

            <div className="navbar-dropdown has-background-info-light">
              {Items.map((item, index) => {
                const { path, page, icon } = item;
                if (path !== window.location.pathname) {
                return (
                  <>
                    <Link to={path} className={"navbar-item is-size-4"}>
                      <FontAwesomeIcon className="mr-3" icon={icon} />
                      {page}
                    </Link>
                    <hr className="dropdown-divider" />
                  </>
                );
                }
              })}
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
