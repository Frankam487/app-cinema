import { NavLink } from "react-router-dom";

const Headers = () => {
    return ( 
        <div className="header">
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>Acceuil</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
     );
}
 
export default Headers;