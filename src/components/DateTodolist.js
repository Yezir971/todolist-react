import React, { useEffect, useState } from 'react'
import '../assets/texte.css'



const date = new Date();
// prédéfinir le nom des jours de la semaines 
let jour = "";
switch (date.getDay()) {
    case 1:
        jour = "Lundi"
        break;
    case 2:
        jour = "Mardi"
        break;
    case 3:
        jour = "Mercredi"
        break;
    case 4:
        jour = "Jeudi"
        break;
    case 5:
        jour = "Vendredi"
        break;
    case 6:
        jour = "Samedi"
        break;
    case 0:
        jour = "Dimanche"
        break;
    default:
        break;
}

// prédéfinir le nom des mois 
let mois = "";
switch (date.getMonth()) {
    case 0:
        mois = "Janvier"
        break;
    case 1:
        mois = "Février"
        break;
    case 2:
        mois = "Mars"
        break;
    case 3:
        mois = "Avril"
        break;
    case 4:
        mois = "Mai"
        break;
    case 5:
        mois = "Juin"
        break;
    case 6:
        mois = "Juillet"
        break;
    case 7:
        mois = "Août"
        break;
    case 8:
        mois = "Septembre"
        break;
    case 9:
        mois = "Octobre"
        break;
    case 10:
        mois = "Novembre"
        break;
    case 11:
        mois = "Décembre"
        break;
    default:
        break;
}


function DateTodolist(){
    const [ time, setTimer ]  = useState(new Date())
    useEffect(()=>{
        const interval = setInterval(() => {
            setTimer(new Date())
        }, 1000);
        return () => clearInterval(interval)
    }, [])
    
    // function sec(){
    //     setInterval(() => {
    //         return String(date.getSeconds()).padStart(2,"0")
    //     }, 100);
        
    // }
    // function min(){
    //     return String(date.getMinutes()).padStart(2,"0")
    // }
    

    return(
        <div className='date'>
            { `
            ${jour} 
            ${date.getDate()} 
            ${mois} ${date.getFullYear()} 
            `}
            <div>
                {`
                ${String(time.getHours()).padStart(2,"0")} : 
                ${String(time.getMinutes()).padStart(2,"0")} : 
                ${String(time.getSeconds()).padStart(2,"0")}` }
                    
            </div>
        </div>
    )
}


export default DateTodolist