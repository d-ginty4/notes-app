import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt, faHouse, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

export type navItem = {
  id: number;
  path: string;
  page: string;
  icon: IconProp;
};

export const navItems: navItem[] = [
  { id: 1, path: "/", page: "home", icon: faHouse },
  { id: 2, path: "/project", page: "project", icon: faProjectDiagram },
  // { path: "/calendar", page: "Calendar", icon: faCalendarAlt },
];
