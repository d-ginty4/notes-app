import React from "react";

interface Props {
  openProjectForm: boolean;
  setOpenProjectForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProjectForm: React.FC<Props> = ({openProjectForm, setOpenProjectForm}) => {
  const closeForm = () => {
    setOpenProjectForm(false)
  }

  return (
    <div
      className={`${
        openProjectForm
          ? "sideForm has-text-centered container p-3 mt-6 move-form"
          : "sideForm has-text-centered container p-3 mt-6"
      }`}
    >
      <span className="delete is-large close-btn" onClick={closeForm}></span>
      <h1 className="has-text-weight-bold is-underlined is-size-2">
        New Project
      </h1>

      <div className="field">
        <label className="label is-size-3">Title</label>
        <div className="control">
          <input
            className="input has-background-light"
            type="text"
            id="title"
          />
        </div>
      </div>

      <div className="field">
        <label className="label is-size-3">Description</label>
        <div className="control">
          <textarea
            className="textarea has-background-light"
            id="description"
          ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label is-size-3">Due Date (Optional)</label>
        <div className="control">
          <input
            className="input has-background-light"
            type="date"
            id="dueDate"
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button has-text-weight-bold has-background-light is-size-4 is-inline-block"
            id="createProject"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};
