import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../../models/models";

interface Props {
  project: Project;
}

export const ProjectSummary: React.FC<Props> = ({ project }) => {
  const { id, title, description } = project;

  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <Link to={`/project/${id}`} className="button has-text-weight-bold is-size-6">
          Go to project
        </Link>
      </td>
    </tr>
  );
};
