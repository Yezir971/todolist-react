import React, { useEffect, useState } from 'react'
import '../assets/app.css'


// function PopUp(props){
function PopUp({trigger, setTrigger,  task, addTask }){
    const [ error, setError ] = useState("")
    let idTask = task.length
    const onSubmit = (e) => {
        e.preventDefault();
        const currentTaskAdded = task.find((task) => task.idTask === idTask)

        const todoText = e.currentTarget.elements.tache.value;
        const todoTime = e.currentTarget.elements.time.value;
        if(todoText.trim() !== "" && todoTime.trim() !== ""){
            if(currentTaskAdded) {
                const taskFilteredCurrentPlant = task.filter(
                        (task) => task.idTask !== idTask
                    )
                addTask([...taskFilteredCurrentPlant,{todoText,todoTime}])
            }else {
                addTask([...task, {todoText,todoTime}])
            }
    
            addToTask(todoText,todoTime)
            setTrigger(false)

            setError("")
        }else{
            setError("Entre une tâche correcte")
            
            // console.log("entre une tache correcte ")
        }

    }
    

    function savetoLocalStorage(name,data){
        localStorage.setItem(name, JSON.stringify(data))
    }
    
    function addToTask(nameTask,time){
        addTask([...task,{nameTask,time,fait:false}])
        
    }
    function reset(){
        setTrigger(false) 
        setError("")
    }

    useEffect(()=>{
        savetoLocalStorage('tache', task)
    }, [task])
    return(trigger) ? (
        <div className='pagePopup'>
            <form onSubmit={onSubmit} className="popUp"> 
                <div className='inputTaches'>
                    <span className='spanTacheTimer'>
                        <label form='tache'>Tâche</label>
                        <input id='tache' name='tache' type="text"/>
                    </span>
                    <span className='spanTacheTimer'>
                        <label for="time">Timer de fin</label>
                        <input className="time" name='time' type="time"/>
                    </span>
                </div>
                {error}
                <div className='inputSubmit'>
                    <input value={'Ajouter'} type="submit"/>                    
                    <button onClick={() => reset()}>Fermer</button>
                </div>
            </form>
        </div>
    ) : "";
}
export default PopUp