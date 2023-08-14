import React from 'react';
import Button from './Button';

const ToDoSummery = ({todos, resetTaskList}) => {

    
     
    return (
        <div>
            <div className='card'>
                <div className="card-header"  style={{ display: 'flex',justifyContent: 'space-between',flexDirection: 'row-reverse'}}>
                    <Button type="danger" onClick={resetTaskList}>Reset Todo List</Button>
                    <h5>To Do Count : {parseInt(todos.length)} </h5>
                </div>
            </div>
            <br></br> 
        </div>
    )
}

export default ToDoSummery;