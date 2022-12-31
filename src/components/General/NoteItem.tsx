import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Note} from "../../models/models";

interface Props{
  note: Note
}

export const NoteItem: React.FC<Props> = ({note}) => {
  const {title, content} = note
  return (
    <div className="card">
      <div className="is-pulled-right">
        <div className="dropdown is-hoverable is-up">
          <div className="dropdown-trigger">
            <span className="icon is-medium">
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content message">
              <div className="dropdown-item is-size-4 has-text-weight-bold">
                Edit note
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown is-hoverable is-up">
          <div className="dropdown-trigger">
            <span className="icon is-medium">
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content message">
              <div className="dropdown-item is-size-4 has-text-weight-bold">
                Delete note
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="title">{title}</h1>
      <div className="card-content">
        <div className="content is-size-4">{content}</div>
      </div>
    </div>
  );
};
