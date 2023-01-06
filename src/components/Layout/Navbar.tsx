/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { navItem, navItems } from "../../data/nav-items";
import { useGlobalContext } from "../../hooks/context";
import { useEffect, useState } from "react";
import { projects} from "../../data/project";

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  //Hooks
  const { pageName, navbar, main } = useGlobalContext();
  const [items, setItems] = useState<navItem[]>(navItems);
  const [activeItem, setActiveItem] = useState<navItem>(navItems[0]);

  // useEffect(() => {
  //   setNav();
  // }, []);

  useEffect(() => {
    setNav();
  }, [pageName]);

  function setNav() {
    //console.clear();
    // const temp = items.find((item) => item.page === pageName);
    // switch(typeof temp){
    //   case "undefined":
    //     setActiveItem({
    //       id: 0,
    //       page:"error",
    //       path: "/error",
    //       icon: faUser
    //     })
    //     break
    //   default: setActiveItem(temp)
    // }
    console.log("Active item");
    console.log(activeItem);
    setItems(
      navItems.filter((item) => {
        return item.page !== activeItem.page;
      })
    );
    // console.log("Items: ");
    // items.forEach((item) => console.log(item));
  }

  // Click events
  const openSidebar = () => {
    setIsSidebarOpen(true);
    main?.current?.classList.toggle("blur");
  };

  return (
    <div ref={navbar}>
      <nav className="navbar is-fixed-top is-size-4 has-text-weight-bold has-background-primary">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">
              <>
                <FontAwesomeIcon className="mr-3" icon={activeItem.icon} />{" "}
                {activeItem.page.charAt(0).toUpperCase() +
                  activeItem.page.slice(1)}
              </>
            </span>

            <div className="navbar-dropdown has-background-info-light">
              {items.map((item, index) => {
                const { path, page, icon } = item;
                return (
                  <span key={item.id}>
                    <Link
                      to={
                        path === "/project"
                          ? "/project/" + projects[0].id
                          : path
                      }
                      className="navbar-item is-size-4 p-4"
                    >
                      <FontAwesomeIcon className="mr-3" icon={icon} />
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </Link>
                    {index === items.length - 1 ? (
                      ""
                    ) : (
                      <hr className="dropdown-divider"></hr>
                    )}
                  </span>
                );
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
    </div>
  );
};
