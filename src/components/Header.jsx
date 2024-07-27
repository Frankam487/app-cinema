import { NavLink } from "react-router-dom";

const Headers = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={nav => nav.isActive ? "nav-active" : ""}>
                            Acceuil
                        </NavLink>
                    </li>
                    <li>

                        <NavLink className={nav => nav.isActive ? "nav-active" : ""} to="/coup-de-coeur">
                            Coup de coeur
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <h1>React Movies</h1>
        </div>
    );
}

export default Headers;