import { ProjectList } from "../components/ProjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { NotesList } from "../components/NotesList";

const Home: React.FC = () => {
  return (
    <>
      <section className="section no=pad">
        <div className="columns">
          <ProjectList />
        </div>
      </section>

      <section className="section no-pad">
        <h1 className="has-text-weight-bold is-size-2">Quick notes</h1>
        <button className="button has-text-weight-bold is-size-5 mb-5">
          <FontAwesomeIcon icon={faPlus}/> Create new quick note
        </button>
        <div className="notes">
          <NotesList />
        </div>
      </section>
    </>
  );
};

export default Home;
