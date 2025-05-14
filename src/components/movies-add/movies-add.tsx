import { ChangeEvent, Component } from "react";
import "./movies-add.css";

interface IMoviesAdd {
  name: string;
  veiws: string;
}

class MoviesAdd extends Component<object, IMoviesAdd> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      veiws: "",
    };
  }
  changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name" || name === "veiws") {
      this.setState({
        [name]: value,
      } as Pick<IMoviesAdd, "name" | "veiws">);
    }
  };
  render() {
    const { name, veiws } = this.state;
    return (
      <div className="movies-add">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex">
          <input
            name="name"
            type="text"
            className="form-control new-movie-label"
            placeholder="Qanday kino?"
            onChange={this.changeHandler}
            value={name}
          />
          <input
            name="veiws"
            type="number"
            className="form-control new-movie-label"
            placeholder="Necha martoba ko'rilgan?"
            onChange={this.changeHandler}
            value={veiws}
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
