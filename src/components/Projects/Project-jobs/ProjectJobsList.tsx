import React from "react";
import { ProjectJobsListItem } from "./ProjectJobsListItem";

export const ProjectJobsList: React.FC = () => {
  return (
    <div className="jobs">
      <table className="table is-striped is-size-4">
        <thead>
          <tr>
            <th style={{ width: "15%" }}>Title</th>
            <th style={{ width: "15%" }}>Due Date</th>
            <th style={{ width: "45%" }}>Task</th>
            <th colSpan={2} style={{ width: "25%" }}>
              Options
            </th>
          </tr>
        </thead>
        <tbody id="jobSection">
          <ProjectJobsListItem />
          <ProjectJobsListItem />
          <ProjectJobsListItem />
        </tbody>
      </table>
    </div>
  );
};
