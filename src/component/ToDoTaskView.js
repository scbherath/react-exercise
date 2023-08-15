import React from 'react';
import Button from './Button';

const ToDoTaskView = ({item, removeTask, id}) => {
    return (
        <div  key={id} style={{ display: 'flex',justifyContent: 'space-between',flexDirection: 'row', height:'50px'}}>
            {item}
            <Button type="success" onClick={(item)=>removeTask(id)} styleHeight='30'>Remove</Button>
        </div>
    )
}

export default ToDoTaskView;