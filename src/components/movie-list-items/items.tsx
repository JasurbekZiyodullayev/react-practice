import "./items.css";
import { IMovie } from "../app/app";

interface TMovieItems extends IMovie {
  onDelete: (id: string) => void;
  onToggleProp: (id: string, prop: string) => void;
}

export default function MovieItems({
  name,
  view,
  id,
  onDelete,
  onToggleProp,
  like,
  favourt,
}: TMovieItems) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between  ${
        favourt && "increase"
      } ${like && "like"}`}
    >
      <span
        onClick={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-like")!)
        }
        className="list-group-item-label"
        data-like="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={view}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          data-favourt="favourt"
          onClick={(e) => {
            e.preventDefault();
            onToggleProp(id, e.currentTarget.getAttribute("data-favourt")!);
          }}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button
          type="button"
          className="btn-trash btn-sm"
          onClick={() => onDelete(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}
