import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import ToDoForm from './component/ToDoForm';
import ViewDoTo from './component/ViewDoTo';
import 'bootstrap/dist/css/bootstrap.css';

import Layouts from './component/Layouts';
import Header from './component/Header';

function App() {

  const [task, setTask] = useState('')
  const [todos, setTodos]= useState([])
  const [message, setMessage] =useState('')
  
  const hangleChange = (e) => {
    setTask(e.target.value)
    setMessage('')
  }
  
  const handleButton = (e) => {
    e.preventDefault()
    if (task===''){
      //alert('Can not add blank task')
      setMessage('Can not add blank task')
      return 
    }
    if (!todos.includes(task)) {
      setTodos( [...todos,task])
      setTask('')
    }else{
      //alert('Duplicate task')
      setMessage('Duplicate task')
      return
    }
  }

  const removeTask = (indexToRemove)=>  {
    let newArray = [...todos];
    newArray.splice(indexToRemove,1)
    setTodos(newArray); 
  }

  const resetTaskList = () => {
    setTodos([])
    setTask('')
  }


  return (
    <Layouts size='6'>
      <Header title="To Do Application" />
        <div className='card'>
          <div className="card-header"  style={{ display: 'flex',justifyContent: 'space-between',flexDirection: 'row-reverse'}}>
            <button className='btn btn-danger' onClick={resetTaskList} >Reset Todo List</button>
            <h5>To Do Count : {parseInt(todos.length)} </h5>
          </div>
        </div>
        <br></br>

        <div className='card' >
          <div className="card-header"><h5>Add To Do </h5> </div>
            <div className="card-body">          
            <form onSubmit={handleButton}>
                <input type='text' name='todo_name' value={task} onChange={hangleChange} />
                 
                <button className='btn btn-info' type='submit' >add</button>
                <span className='text-danger'>{message}</span>
            </form> 
            </div>
        </div>
        <br></br>

        <div className='card' >
            <div className="card-header"><h5>To Do List </h5> </div>
            <div className="card-body">          
              <ul>
              {
                  todos && todos.map((item,i)=>(
                    
                      <li key={i}>
                        <div style={{ display: 'flex',justifyContent: 'space-between',flexDirection: 'row', height:'50px'}}>
                          {item} 
                          <button className='btn btn-success' onClick={(item)=>removeTask(i)} style={{ height:'40px'}} >Remove</button>            
                        </div>  
                      </li>       
                  ))
              }
              </ul>
            </div>
        </div>

    </Layouts>
  );
}

export default App;
