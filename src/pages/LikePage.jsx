
import { useEffect, useState } from "react";
import Header from "../components/Header"
import axios from "axios";
import Card from "../components/Card";
const LikePage = () => {
    const [listdata, setListdata] = useState([])
    useEffect(() => {
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
        for (let i = 0; i < moviesId.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`).then((res) => setListdata((listdata) => [...listdata, res.data]));
        }

    }, [])

    return (
        <div className="user-list-page">
            <Header />
            <h2>Coups de coeur <span style={{ fontSize: "2rem" }}>❤️</span></h2>
            <div className="result">
                {listdata.length > 0 ? (
                    listdata.map((movie) => <Card movie={movie} key={movie.id} />)
                ) : (
                    <h2>Aucun coup de coeur pour le moment</h2>
                )}
            </div>
        </div>
    );
}

export default LikePage;