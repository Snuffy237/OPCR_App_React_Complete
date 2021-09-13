import React from "react";
import {useParams, Link} from 'react-router-dom'

function Survey() {
let {questionNumber} = useParams()
let questionNumberInt = parseInt(questionNumber)
const prevQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1
const suivQuestion = questionNumberInt + 1

    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestion}`}>Précédent / </Link>
            {
                suivQuestion === 10 ? (<Link to="/results">Resultats</Link>) : (<Link to={`/survey/${suivQuestion}`}>Suivant</Link>)
            }
        </div>
    )
}

export default Survey;