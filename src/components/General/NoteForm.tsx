import React from "react";
import { useGlobalContext } from "../../hooks/context";

interface Props {
  openNoteForm: boolean;
  setOpenNoteForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NoteForm: React.FC<Props> = ({openNoteForm, setOpenNoteForm}) => {
  //Hooks
  const { main } = useGlobalContext();
  
  // Click events
  const closeForm = (): void => {
    setOpenNoteForm(false);
    main?.current?.classList.toggle("blur");
  };

  return (
    <div
      className={`${
        openNoteForm
          ? "sideForm has-text-centered container p-3 mt-6 move-form"
          : "sideForm has-text-centered container p-3 mt-6"
      }`}
    >
      <span
        className="delete is-large is-pulled-left"
        onClick={closeForm}
      ></span>
      <h1 className="has-text-weight-bold is-underlined is-size-2">New Note</h1>

      <div className="field ">
        <label className="label is-size-3">Title (Optional)</label>
        <div className="control">
          <input className="input has-background-light" type="text" />
        </div>
      </div>

      <div className="field ">
        <label className="label is-size-3">Note</label>
        <div className="control">
          <textarea className="textarea has-background-light"></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button has-text-weight-bold has-background-light is-size-4 is-inline-block">
            Create Note
          </button>
        </div>
      </div>
    </div>
  );
};
