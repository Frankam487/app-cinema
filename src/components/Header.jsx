import { NavLink } from "react-router-dom";

const Headers = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Acceuil
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/coup-de-coeur">
                            Coup de coeur
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Headers;