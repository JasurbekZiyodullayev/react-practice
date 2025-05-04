import MovieItems from "../movie-list-items/items";
import "./movie-list.css";
export default function MovieList() {
  return (
    <div className="movie-list d-flex flex-column gap-3">
      <MovieItems />
      <MovieItems />
      <MovieItems />
      <MovieItems />
    </div>
  );
}
