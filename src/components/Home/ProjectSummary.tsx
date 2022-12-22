import React from "react";

export const ProjectSummary = () => {
  return (
    <tr>
      <td>Name</td>
      <td>Description</td>
      <td>
        <form action="projects.html">
          <input type="submit" value="Go to project" />
        </form>
      </td>
    </tr>
  );
};
