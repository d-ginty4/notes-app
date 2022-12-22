import React from "react";
import { ProjectNotesListItem } from "./ProjectNotesListItem";

export const ProjectNotesList: React.FC = () => {
  return (
    <div className="notes" id="notesSection">
      <ProjectNotesListItem />
      <ProjectNotesListItem />
      <ProjectNotesListItem />
      <ProjectNotesListItem />
    </div>
  );
};
