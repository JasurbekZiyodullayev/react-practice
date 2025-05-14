import { ChangeEvent, Component } from "react";
import "./movies-add.css";

interface IMoviesAdd {
  name: string;
  veiw: string;
}

interface IMoviesAddProps {
  onAddMovie: (name: string, veiw: string) => void;
}

class MoviesAdd extends Component<IMoviesAddProps, IMoviesAdd> {
  constructor(props: IMoviesAddProps) {
    super(props);
    this.state = {
      name: "",
      veiw: "",
    };
  }
  changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name" || name === "veiw") {
      this.setState({
        [name]: value,
      } as Pick<IMoviesAdd, "name" | "veiw">);
    }
  };
  render() {
    const { onAddMovie } = this.props;
    const { name, veiw } = this.state;
    return (
      <div className="movies-add">
        <h3>Yangi kino qo'shish</h3>
        <form
          className="add-form d-flex"
          onSubmit={(e) => {
            e.preventDefault();
            onAddMovie(name, veiw);
            this.setState({ name: "", veiw: "" });
          }}
        >
          <input
            name="name"
            type="text"
            className="form-control new-movie-label"
            placeholder="Qanday kino?"
            onChange={this.changeHandler}
            value={name}
          />
          <input
            name="veiw"
            type="number"
            className="form-control new-movie-label"
            placeholder="Necha martoba ko'rilgan?"
            onChange={this.changeHandler}
            value={veiw}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAdd;
