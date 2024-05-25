import '../assets/texte.css'
import '../assets/tasks.css'
import UnderLine from './Underline';
import React from 'react';
import Checked from './Checked';

function ListeTask({id, element, doIt, setDoIt, deleteTask, checked }){
    return(
        <li>
            <Checked id={id} doIt={doIt} checked={checked} />
            <span className='tache'>
                <span className='elementTache todo'>
                    <p className='todo'>{element.nameTask}</p>
                    <p className='todo'>{element.time}</p>
                </span>
                <UnderLine id={id} doIt={doIt} />
            </span>
            <i onClick={()=> deleteTask(id) } className="fa-regular fa-trash-can"></i>
        </li>
    )
}
export default ListeTask ;