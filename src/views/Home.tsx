import { ProjectList } from "../components/Home/ProjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NotesList } from "../components/Home/NotesList";
import { useEffect, useState } from "react";
import { NoteForm } from "../components/General/NoteForm";
import { useGlobalContext } from "../hooks/context";

const Home: React.FC = () => {
  // Hooks
  const [openNoteForm, setOpenNoteForm] = useState<boolean>(false);
  const { setPage } = useGlobalContext();

  useEffect(() => {
    setPage(window.location.pathname);
  }, []);

  // Click events
  const openNoteFormFunc = (): void => {
    setOpenNoteForm(true);
  };

  return (
    <>
      <section className="section no=pad">
        <div className="columns">
          <ProjectList />
        </div>
      </section>

      <section className="section no-pad">
        <h1 className="has-text-weight-bold is-size-2">Quick notes</h1>
        <button
          className="button has-text-weight-bold is-size-5 mb-5"
          onClick={openNoteFormFunc}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" /> Create new quick
          note
        </button>
        <NotesList />
      </section>

      <NoteForm openNoteForm={openNoteForm} setOpenNoteForm={setOpenNoteForm} />
    </>
  );
};

export default Home;
