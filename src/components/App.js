import React, { useEffect } from "react";
import '../assets/app.css'
import '../assets/texte.css'
import DateTodolist from "./DateTodolist";
import NumberTask from "./NumberTasks";
import Tasks from "./Tasks";
import PopUp from "./PopUp";
import { useState } from "react";
import "../assets/add.css";


function App(){



    const [buttonPopUp, setButonPopUp] = useState(false);
    const savedTask = localStorage.getItem('tache')
    const [task, addTask] = useState(savedTask ? JSON.parse(savedTask) : [])//condition qui vérifie si il y a déjà des tâche, sinon 'créer un tableau/espace dans le local
    useEffect(() => {
        localStorage.setItem('tache', JSON.stringify(task)) //on ajoute dans le localStorage
    }, [task])





    return (
        <React.Fragment>
            <React.Fragment>
                <div className="headerTodolist">
                    <DateTodolist />
                    <React.Fragment>
                        <div onClick={() => setButonPopUp(true)} className="circle" >
                            <div className="croix1"></div>
                            <div className="croix2"></div>
                        </div>
                    </React.Fragment>
                </div>
                <NumberTask task={task} />
                <Tasks task={task} addTask={addTask} />
            </React.Fragment>
            <PopUp trigger={buttonPopUp} setTrigger={setButonPopUp} task={task} addTask={addTask}  />
        </React.Fragment>
    )
}

export default App;