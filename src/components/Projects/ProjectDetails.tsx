import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

export const ProjectDetails: React.FC = () => {
  return (
    <div>
      <h1 className="title has-text-centered is-size-2">
        Name
        <div className="project-icons is-pulled-right">
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <span className="mr-5">
                <FontAwesomeIcon icon={faEdit} />
              </span>
            </div>
            <div className="dropdown-menu">
              <div className="dropdown-content message">
                <div className="dropdown-item is-size-5 has-text-weight-bold">
                  Edit Project Details
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <span className="mr-6">
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>
            <div className="dropdown-menu">
              <div className="dropdown-content message">
                <div className="dropdown-item is-size-5 has-text-weight-bold">
                  Delete Project
                </div>
              </div>
            </div>
          </div>
        </div>
      </h1>
      <h2 className="subtitle has-text-weight-normal mb-1">Due: 08-12-1999</h2>
      <p className="is-size-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum error
        delectus sint quasi nemo illo at excepturi. Hic tempore incidunt
        accusantium repellendus natus voluptate, ut aliquam pariatur eius,
        nostrum sapiente corrupti neque consectetur, obcaecati minus atque
        facilis. Dolorum nostrum inventore sunt, fugiat aliquam sequi omnis
        reiciendis necessitatibus praesentium a? Earum!
      </p>
    </div>
  );
};
