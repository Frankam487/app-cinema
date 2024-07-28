const Card = ({ movie }) => {
    return (
        <div className="card">
            <img src={movie.poster_path ?
                "https://image.tmdb.org/t/p/original/" + movie.poster_path : movie.poster_path}
             alt="" />
        </div>
    );
}

export default Card;