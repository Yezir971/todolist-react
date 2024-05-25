function UnderLine({id,doIt}){
    
    const task = doIt[id];
    const isCompleted = task && task.fait ? task.fait : false;

    return (isCompleted) ? (
        <div className='underLine'></div>
    ) : (<div className='notUnderLine'></div>)
}

export default UnderLine