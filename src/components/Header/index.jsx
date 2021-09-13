import React from "react";
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to="">Accueil</Link>
            <Link to="/survey/1">Questionnaire</Link>
            <Link to="/freelances">Freelances</Link>
        </div>
    )
}

export default Header;