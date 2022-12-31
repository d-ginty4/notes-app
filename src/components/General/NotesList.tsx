import React from "react";
import { Note } from "../../models/models";
import { NoteItem } from "./NoteItem";

interface Props {
  notes: Note[];
}

export const NotesList: React.FC<Props> = ({ notes }) => {
  return (
    <div className="notes">
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
};
