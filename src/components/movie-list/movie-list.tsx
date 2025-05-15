import { IMovie } from "../app/app";
import MovieItems from "../movie-list-items/items";
import "./movie-list.css";
export default function MovieList({
  data,
  onDelete,
  onToggleProp,
}: {
  data: IMovie[];
  onDelete: (id: string) => void;
  onToggleProp: (id: string, prop: string) => void;
}) {
  return (
    <div className="movie-list d-flex flex-column gap-3">
      {data?.map((movie) => (
        <MovieItems
          {...movie}
          key={movie.id}
          onDelete={onDelete}
          onToggleProp={onToggleProp}
        />
      ))}
    </div>
  );
}
