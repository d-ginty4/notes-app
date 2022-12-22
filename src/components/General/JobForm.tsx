import React from "react";

export const JobForm: React.FC = () => {
  return (
    <div
      className="sideForm has-text-centered container p-3 mt-6"
      id="new-job-form"
    >
      <a className="delete is-large close-btn" id="close-btn6"></a>
      <h1
        className="has-text-weight-bold is-underlined is-size-2"
        id="new-task"
      >
        New Job
      </h1>

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
