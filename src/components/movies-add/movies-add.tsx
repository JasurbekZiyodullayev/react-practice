import "./movies-add.css";
export default function MoviesAdd() {
  return (
    <div className="movies-add">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-movie-label"
          placeholder="Qanday kino?"
        />
        <input
          type="number"
          className="form-control new-movie-label"
          placeholder="Necha martoba ko'rilgan?"
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
}
