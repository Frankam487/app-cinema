import { useEffect } from "react";
import axios from "axios";
const Form = () => {
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR`).then((res) => console.log(res.data.results))
    })
    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Entrer le titre d'un film" name="" id="search-input" />
                    <input type="submit" value="Rechercher" />
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad">
                        Top <span>+</span>
                    </div>
                    <div className="btn-sort" id="badToGood">
                        Fop <span>-</span>
                    </div>
                </div>
            </div>
            <div className="result">RESULTAT</div>
        </div>
    );
}

export default Form;