import React from "react";
import { Note } from "../General/Note";

export const ProjectNotesList: React.FC = () => {
  return (
    <div className="notes" id="notesSection">
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};
