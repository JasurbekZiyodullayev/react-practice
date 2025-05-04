import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAdd from "../movies-add/movies-add";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

export default function App() {
  return (
    <div className="app font-monospace">
      <div className="contents">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList />
        <MoviesAdd />
      </div>
    </div>
  );
}
