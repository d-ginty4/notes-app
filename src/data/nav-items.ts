import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt, faHouse, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

type navItem = {
  path: string;
  page: string;
  icon: IconProp;
};

export const navItems: navItem[] = [
  { path: "/", page: "Home", icon: faHouse },
  { path: "/project/:id", page: "Projects", icon: faProjectDiagram },
  // { path: "/calendar", page: "Calendar", icon: faCalendarAlt },
];
