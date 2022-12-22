import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

export const ProjectJobsListItem: React.FC = () => {
  return (
    <tr>
      <td className="table-title">Job title</td>
      <td className="table-dueDate">11-08-1999</td>
      <td className="table-note">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quis
        delectus perferendis assumenda eveniet expedita natus in amet minus
        vero, omnis, similique quibusdam rerum eaque.
      </td>
      <td>
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <span className="icon is-medium">
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content" id="message">
              <div className="dropdown-item is-size-4 has-text-weight-bold">
                Edit Job
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <span className="icon is-medium">
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content" id="message">
              <div className="dropdown-item is-size-4 has-text-weight-bold">
                Delete Job
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
