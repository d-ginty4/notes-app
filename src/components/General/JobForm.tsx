import React from "react";

interface Props {
  openJobForm: boolean;
  setOpenJobForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const JobForm: React.FC<Props> = ({ openJobForm, setOpenJobForm }) => {
  const closeForm = (): void => {
    setOpenJobForm(false);
  };

  return (
    <div
      className={`${
        openJobForm
          ? "sideForm has-text-centered container p-3 mt-6 move-form"
          : "sideForm has-text-centered container p-3 mt-6"
      }`}
    >
      <span className="delete is-large close-btn" onClick={closeForm}></span>
      <h1 className="has-text-weight-bold is-underlined is-size-2">New Job</h1>

      <div className="field">
        <label className="label is-size-3">Title</label>
        <div className="control">
          <input
            className="input has-background-light"
            type="text"
            id="newJobTitle"
          />
        </div>
      </div>

      <div className="field">
        <label className="label is-size-3">Task</label>
        <div className="control">
          <textarea
            className="textarea has-background-light"
            id="newJobTask"
          ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label is-size-3">Due Date</label>
        <div className="control">
          <input
            className="input has-background-light"
            type="date"
            id="newJobDueDate"
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button has-text-weight-bold has-background-light is-size-4 is-inline-block"
            id="createJob"
          >
            Create Job
          </button>
        </div>
      </div>
    </div>
  );
};
