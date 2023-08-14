import React , {useState} from 'react';
import Button from './Button';

const ToDoForm = ({handleSubmitForm, task, message, handleChange}) => {

    return (
        <div>
            <div className='card' >
                <div className="card-header">
                    <h5>Add To Do </h5> 
                </div>
                <div className="card-body">          
                    <form onSubmit={handleSubmitForm}>
                        <input type='text' name='todo_name' value={task} onChange={handleChange} />                        
                        <Button type="info">add</Button>
                        <span className='text-danger'>{message}</span>
                    </form> 
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default ToDoForm;