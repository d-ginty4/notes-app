import React from "react";

export const NoteForm: React.FC = () => {
  return (
    <div
      className="sideForm has-text-centered container p-3 mt-6"
      id="new-note-form"
    >
      <a className="delete is-large close-btn" id="close-btn4"></a>
      <h1 className="has-text-weight-bold is-underlined is-size-2">New Note</h1>

      <div className="field ">
        <label className="label is-size-3">Title (Optional)</label>
        <div className="control">
          <input
            className="input has-background-light"
            type="text"
            id="newNoteTitle"
          />
        </div>
      </div>

      <div className="field ">
        <label className="label is-size-3">Note</label>
        <div className="control">
          <textarea
            className="textarea has-background-light"
            id="newNoteNote"
          ></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button has-text-weight-bold has-background-light is-size-4 is-inline-block"
            id="createNote"
          >
            Create Note
          </button>
        </div>
      </div>
    </div>
  );
};
