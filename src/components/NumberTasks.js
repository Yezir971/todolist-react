import React from 'react'
import '../assets/texte.css'


function NumberTask({ task }){


    return(
        <React.Fragment>
            {task.length <= 1 ? <p className="nombreTaches">{task.length} tâche</p> : <p className="nombreTaches">{task.length} tâches</p>}
        </React.Fragment>
    )
}
export default NumberTask