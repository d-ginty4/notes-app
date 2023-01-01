import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ProjectJobsList } from "../components/Projects/ProjectJobsList";
import { ProjectDetails } from "../components/Projects/ProjectDetails";
import { NoteForm } from "../components/General/NoteForm";
import { JobForm } from "../components/General/JobForm";
import { ProjectForm } from "../components/General/ProjectForm";
import { useGlobalContext } from "../hooks/context";
import { NotesList } from "../components/General/NotesList";
import { notes } from "../data/notes";
const Projects: React.FC = () => {
  // Hooks
  const [openNoteForm, setOpenNoteForm] = useState<boolean>(false);
  const [openJobForm, setOpenJobForm] = useState<boolean>(false);
  const [openProjectForm, setOpenProjectForm] = useState<boolean>(false);
  const { setPagePath, main, navbar } = useGlobalContext();

  useEffect(() => {
    setPagePath(window.location.pathname);
    if (navbar?.current?.classList.contains("is-hidden")) {
      navbar?.current?.classList.remove("is-hidden");
    }
  }, []);

  // Click events
  const openNoteFormFunc = (): void => {
    setOpenNoteForm(true);
    main?.current?.classList.toggle("blur");
  };

  const openJobFormFunc = (): void => {
    setOpenJobForm(true);
    main?.current?.classList.toggle("blur");
  };

  const openProjectFormFunc = (): void => {
    setOpenProjectForm(true);
    main?.current?.classList.toggle('blur')
  };

  return (
    <>
      <section className="section no-pad my-5 pb-0">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button className="button has-text-weight-bold is-size-4">
              <span>Project name</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content has-background-info-light">
              <span className="dropdown-item">Item 1</span>
              <hr className="dropdown-divider"></hr>
              <span className="dropdown-item">Item 2</span>
              <hr className="dropdown-divider"></hr>
              <span className="dropdown-item">Item 3</span>
            </div>
          </div>
        </div>

        <button
          className="button has-text-weight-bold is-size-4 is-pulled-right"
          onClick={openProjectFormFunc}
        >
          <FontAwesomeIcon icon={faPlus} />
          Create new Project
        </button>
      </section>
      <section className="section no-pad">
        <div className="content">
          <ProjectDetails />
          <hr />

          {/* Attachments Section
          <div className="layout">
            <h2 className="has-text-weight-semibold is-italic">
              &emsp; Attachments
            </h2>
            <div className="vertical-center">
              <button className="button has-text-weight-bold mr-6">
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <span className="is-size-4">Add file</span>
                </span>
              </button>
            </div>
          </div>
          <hr /> */}

          {/* Project jobs section */}
          <div className="layout">
            <h2 className="has-text-weight-semibold is-italic">
              &emsp; Project Jobs
            </h2>
            <div className="vertical-center">
              <button
                className="button has-text-weight-bold mr-6"
                onClick={openJobFormFunc}
              >
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <span className="is-size-4">Add New Job</span>
                </span>
              </button>
            </div>
          </div>
          <ProjectJobsList />
          <hr />

          {/* Project notes section */}
          <div className="layout">
            <h2 className="has-text-weight-semibold is-italic">
              &emsp; Project Notes
            </h2>
            <div className="vertical-center">
              <button
                className="button has-text-weight-bold mr-6"
                onClick={openNoteFormFunc}
              >
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <span className="is-size-4">Add New Note</span>
                </span>
              </button>
            </div>
          </div>
          <NotesList notes={notes} />
        </div>
      </section>

      {/* Various forms */}
      <ProjectForm
        openProjectForm={openProjectForm}
        setOpenProjectForm={setOpenProjectForm}
      />
      <NoteForm openNoteForm={openNoteForm} setOpenNoteForm={setOpenNoteForm} />
      <JobForm openJobForm={openJobForm} setOpenJobForm={setOpenJobForm} />
    </>
  );
};

export default Projects;
