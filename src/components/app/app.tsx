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
  like: boolean;
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
          like: false,
          id: "1",
        },
        {
          name: "Avatars",
          view: "999",
          favourt: false,
          like: false,
          id: "2",
        },
        {
          name: "Lord of the rings",
          view: "998",
          favourt: false,
          like: false,
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
      data: [
        ...data,
        { name, view, favourt: false, like: false, id: uuidv4() },
      ],
    }));
  };
  onToggleProp = (id: string, prop: string) => {
    this.setState(({ data }) => ({
      data: data?.map((movie) =>
        movie.id === id
          ? { ...movie, [prop]: !movie[prop as keyof IMovie] }
          : movie
      ),
    }));
  };
  render() {
    const { data } = this.state;
    const dataFavourt = data.filter((movie) => movie.favourt).length;
    return (
      <div className="app font-monospace">
        <div className="contents">
          <AppInfo dataLingth={data.length} dataFavourt={dataFavourt} />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList
            data={data}
            onDelete={this.onDelete}
            onToggleProp={this.onToggleProp}
          />
          <MoviesAdd onAddMovie={this.onAddMovie} />
        </div>
      </div>
    );
  }
}

export default App;
