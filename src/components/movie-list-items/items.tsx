import { Component } from "react";
import "./items.css";
import { IMovie } from "../app/app";

interface MovieItemsState {
  favourt: boolean;
  like: boolean;
}
interface TMovieItems extends IMovie {
  onDelete: (id: string) => void;
}

class MovieItems extends Component<TMovieItems, MovieItemsState> {
  constructor(props: TMovieItems) {
    super(props);
    this.state = {
      favourt: false,
      like: false,
    };
  }
  onFavourt = () => {
    this.setState(({ favourt }) => ({
      favourt: !favourt,
    }));
  };

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { name, view, id, onDelete } = this.props;
    const { favourt, like } = this.state;
    return (
      <li
        onClick={this.onLike}
        className={`list-group-item d-flex justify-content-between  ${
          favourt && "increase"
        } ${like && "like"}`}
      >
        <span className="list-group-item-label">{name}</span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={view}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={this.onFavourt}
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
}

export default MovieItems;

// export default function MovieItems({ name, view, favourt }: IMovie) {
//   return (
//     <li
//       className={`list-group-item d-flex justify-content-between ${
//         favourt && "increase"
//       }`}
//     >
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="number"
//         className="list-group-item-input"
//         defaultValue={view}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm">
//           <i className="fas fa-cookie"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// }
