import '../assets/texte.css'
import '../assets/tasks.css'
import { useEffect, useState } from 'react';
import ListeTask from './ListeTask';


function Tasks({ task, addTask }){
    let [doIt, setDoIt] = useState(task);
    useEffect(() => {
        setDoIt(task);
    }, [task]);
    
    // fonction qui va permetre de changer le statu d'une tache 
    function checked(id){
        const updateTasks = doIt.map((element, index)=>{
            if(index === id){
                return{ ...element, fait: !element.fait }
            }
            return element
        });
        localStorage.setItem('tache', JSON.stringify(updateTasks))
        addTask(updateTasks)

    }
    // fonction qui va nous permettre de supprimer des taches 
    function deleteTask(id){
        let deleteT = task.filter((_, index) => index !== id)
        localStorage.setItem('tache', JSON.stringify(deleteT))
        addTask(deleteT)
    }
    

    return(task.length === 0) ? (
        <p className='taches'>Aucunes taches</p>
    ) : (
        <ul>
            {task.map((element, id)=>{
                return(
                    <ListeTask 
                        key={element.id || id} 
                        id={id} 
                        element={element} 
                        doIt={doIt} 
                        setDoIt={setDoIt} 
                        checked={checked} 
                        deleteTask={deleteTask} 
                    />
                )
            })}
        </ul>
    )
}
export default Tasks;