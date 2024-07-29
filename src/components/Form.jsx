import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Form = () => {
    const [moviesdata, setMoviesData] = useState([]);
    const [search, setSearch] = useState("code");
    const [sortGoodBad, setSortGoodBad] = useState(null);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`).then((res) => setMoviesData(res.data.results))
    }, [search])
  
    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" onChange={(e) => {
                        setSearch(e.target.value)
                    }} placeholder="Entrer le titre d'un film" name="" id="search-input" />
                    <input type="submit" value="Rechercher" />
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad" onClick={() => setSortGoodBad("goodToBag")}>
                        Top <span>+</span>
                    </div>
                    <div className="btn-sort" id="badToGood" onClick={() => setSortGoodBad("goodToBad")}>
                        Fop <span>-</span>
                    </div>
                </div>
            </div>
            <div className="result">
                {
                    moviesdata.slice(0, 12).sort((a, b) => {
                        if (sortGoodBad === "goodToBad") {
                            return b.vote_average - a.vote_average;

                        } else if (sortGoodBad === "badToGood") {

                            return a.vote_average - b.vote_average;
                        }
                    })
                        .map((movie, index) => (
                            <Card movie={movie} key={index} />
                        ))
                }
            </div>
        </div>
    );
}

export default Form;