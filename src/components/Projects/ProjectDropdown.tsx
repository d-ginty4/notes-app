import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "../../models/models";

interface Props {
  id: string | undefined;
  projectList: Project[];
}

export const ProjectDropdown: React.FC<Props> = ({ id, projectList }) => {
  const [projects, setProjects] = useState<Project[]>(projectList);
  const [project, setProject] = useState<Project>({ id: 0, title: "" });

  useEffect(() => {
    switch (typeof id) {
      case "string":
        setProject(projects.find((p) => p.id === parseInt(id)) || project);
        setProjects(projects.filter((p) => p.id !== project.id))
        break;
    }
  }, []);

  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <button className="button has-text-weight-bold is-size-4">
          {<span className="mr-3">{project.title}</span>}
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>

      <div className="dropdown-menu">
        <div className="dropdown-content has-background-info-light">
          {projects.map((project, index) => {
            switch (typeof id) {
              case "string":
                if (project.id === parseInt(id)) {
                  return "";
                }
            }
            return (
              <>
                <Link
                  to={`/project/${project.id}`}
                  className="dropdown-item is-size-4"
                >
                  {project.title}
                </Link>
                {index === projects.length - 1 ? (
                  ""
                ) : (
                  <hr className="dropdown-divider"></hr>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
