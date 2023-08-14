import React from 'react';
import ToDoTaskView from './ToDoTaskView';

const ToDoList = ({todos, removeTask}) => {
    return (
        <div>  
            {todos.length>0?
            <div className='card' >
              <div className="card-header">
                <h5>To Do List </h5> 
              </div>
              <div className="card-body">          
                <ul>
                {
                    todos && todos.map((item,i)=>(
                      <li key={i}>
                        <ToDoTaskView key={i} item={item} removeTask={removeTask} />                      
                      </li>       
                    ))
                }
                </ul>
              </div>
            </div>
            :null
            }
        </div>
    )
}

export default ToDoList;