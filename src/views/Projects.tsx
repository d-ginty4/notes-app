import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Projects: React.FC = () => {
  return (
    <>
      <section className="section no-pad my-5 pb-0">
        <button
          className="button has-text-weight-bold is-size-4 is-pulled-right"
          id="openForm"
        >
          <span className="icon-text">
            <i className="fas fa-plus mr-3"></i>Create new Project
          </span>
        </button>

        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button className="button has-text-weight-bold is-size-4">
              <span className="is-hidden" id="projectId"></span>
              <span id="projectName"></span>
              <span className="icon is-small">
                <i className="fas fa-angle-down"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu">
            <div
              className="dropdown-content has-background-info-light"
              id="projectList"
            ></div>
          </div>
        </div>
      </section>

      <section className="section no-pad">
        <div className="content">
          <div id="projectDetails"></div>
          <hr />
          <div className="layout">
            <h2 className="has-text-weight-semibold is-italic">
              &emsp; Attachments
            </h2>
            <div className="vertical-center">
              <button
                className="button has-text-weight-bold mr-6"
                id="new-file"
              >
                <span className="icon-text">
                  <span className="icon">
                    <i className="fas fa-plus"></i>
                  </span>
                  <span className="is-size-4">Add file</span>
                </span>
              </button>
            </div>
          </div>

          <hr />
          <div className="layout">
            <h2 className="has-text-weight-semibold is-italic">
              &emsp; Project Jobs
            </h2>
            <div className="vertical-center">
              <button className="button has-text-weight-bold mr-6" id="new-job">
                <span className="icon-text">
                  <span className="icon">
                    <i className="fas fa-plus"></i>
                  </span>
                  <span className="is-size-4">Add New Job</span>
                </span>
              </button>
            </div>
          </div>

          <div className="jobs">
            <table className="table is-striped is-size-4">
              <thead>
                <tr>
                  <th style={{width: '15%'}}>Title</th>
                  <th style={{width: '15%'}}>Due Date</th>
                  <th style={{width: '45%'}}>Task</th>
                  <th colSpan={2} style={{width: '25%'}}>
                    Options
                  </th>
                </tr>
              </thead>
              <tbody id="jobSection"></tbody>
            </table>
          </div>

          <hr />
          <div className="layout">
            <h2 className="has-text-weight-semibold is-italic">
              &emsp; Project Notes
            </h2>
            <div className="vertical-center">
              <button
                className="button has-text-weight-bold mr-6"
                id="new-note"
              >
                <span className="icon-text">
                  <span className="icon">
                    <i className="fas fa-plus"></i>
                  </span>
                  <span className="is-size-4">Add New Note</span>
                </span>
              </button>
            </div>
          </div>

          <div className="notes" id="notesSection"></div>
        </div>
      </section>
    </>
  );
};

export default Projects;
