import {
  faTimes,
  faUserCircle,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<Props> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  // Click events
  const closeSidebar = (): void => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={`${
        isSidebarOpen
          ? "has-background-info-light has-text-centered sideNav sidebar-active"
          : "has-background-info-light has-text-centered sideNav"
      }`}
    >
      <span
        className="delete is-large mt-3 ml-3 sideNav_close-btn"
        onClick={closeSidebar}
      >
        <FontAwesomeIcon icon={faTimes} />
      </span>
      <div className="pt-6">
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faUserCircle}
              className="sideNav_user-icon"
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
  );
};
