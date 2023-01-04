import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt, faHouse, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

export type navItem = {
  path: string;
  page: string;
  icon: IconProp;
};

export const navItems: navItem[] = [
  { path: "/", page: "home", icon: faHouse },
  { path: "/project", page: "project", icon: faProjectDiagram },
  // { path: "/calendar", page: "Calendar", icon: faCalendarAlt },
];
