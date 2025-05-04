import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAdd from "../movies-add/movies-add";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";
export interface IMovie {
  name: string;
  view: number;
  favourt: boolean;
  id: number;
}

export default function App() {
  const data = [
    {
      name: "Avengers",
      view: 811,
      favourt: false,
      id: 1,
    },
    {
      name: "Avatars",
      view: 999,
      favourt: true,
      id: 2,
    },
    {
      name: "Lord of the rings",
      view: 998,
      favourt: false,
      id: 3,
    },
  ];
  return (
    <div className="app font-monospace">
      <div className="contents">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAdd />
      </div>
    </div>
  );
}
