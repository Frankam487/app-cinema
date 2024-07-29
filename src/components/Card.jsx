const Card = ({ movie }) => {
    return (
        <div className="card">
            <img src={movie.poster_path ?
                "https://image.tmdb.org/t/p/original/" + movie.poster_path : "./img/poster.jpg"}
                alt={`affiche ${movie.title}`} />
            <h2>{movie.title}</h2>
            {movie.release_date ?
                <h5>Sorti le : {movie.release_date}</h5> : null
            }
        </div>
    );
}

export default Card;