import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAdd from "../movies-add/movies-add";
import SearchPanel from "../search-panel/search-panel";
import { v4 as uuidv4 } from "uuid";
import "./app.css";
export interface IMovie {
  name: string;
  view: string;
  favourt: boolean;
  id: string;
}
type TApp = {
  data: IMovie[];
};

class App extends Component<object, TApp> {
  constructor(props: object) {
    super(props);
    this.state = {
      data: [
        {
          name: "Avengers",
          view: "811",
          favourt: false,
          id: "1",
        },
        {
          name: "Avatars",
          view: "999",
          favourt: true,
          id: "2",
        },
        {
          name: "Lord of the rings",
          view: "998",
          favourt: false,
          id: "3",
        },
      ],
    };
  }
  onDelete = (id: string) => {
    this.setState(({ data }) => ({
      data: data.filter((movie) => movie.id !== id),
    }));
  };
  onAddMovie = (name: string, view: string) => {
    this.setState(({ data }) => ({
      data: [...data, { name, view, favourt: false, id: uuidv4() }],
    }));
  };
  render() {
    const { data } = this.state;
    return (
      <div className="app font-monospace">
        <div className="contents">
          <AppInfo />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList
            data={data}
            onDelete={this.onDelete}
            onAddMovie={this.onAddMovie}
          />
          <MoviesAdd onAddMovie={this.onAddMovie} />
        </div>
      </div>
    );
  }
}

export default App;
