function Checked({ id,doIt,checked }){
    const task = doIt[id];
    const isCompleted = task && task.fait ? task.fait : false;

    return (isCompleted) ? (
        <svg onClick={()=> { checked(id) }} height="40" width="40" viewBox='0 0 100 100 '>
        <path 
            d='M 15 50
            L 43 85
            L 95 20'></path>

        </svg>
    ) : (<span onClick={()=> { checked(id) }} className='check'></span>
)}

export default Checked