import React from "react";
import { ProjectSummary } from "./ProjectSummary";

export const ProjectList: React.FC = () => {
  return (
    <>
      <div className="column is-half">
        <h1 className="has-text-weight-bold is-size-2">Projects</h1>
        <table className="table is-fullwidth is-size-5">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Project Description</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
          </tbody>
        </table>
      </div>
      <div className="column is-half">
        <h1 className="has-text-weight-bold is-size-2">
          Items Due In Next 7 Days
        </h1>
        <table className="table is-fullwidth is-size-5">
          <thead>
            <tr>
              <th>Date</th>
              <th style={{ width: "40%" }}>Standalone Jobs</th>
              <th style={{ width: "40%" }}>Project Jobs</th>
            </tr>
          </thead>
          <tbody id="calendarJobs"></tbody>
        </table>
      </div>
    </>
  );
};
