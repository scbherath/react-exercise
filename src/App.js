import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import ToDoForm from './component/ToDoForm';
import ToDoView from './component/ToDoView';
import 'bootstrap/dist/css/bootstrap.css';

import Layouts from './component/Layouts';
import Header from './component/Header';
import ToDoSummery from './component/ToDoSummery';

function App() {

  const [task, setTask] = useState('')
  const [todos, setTodos]= useState([])
  const [message, setMessage] =useState('')
  
  const handleChange = (e) => {
    setTask(e.target.value)
    setMessage('')
  }
  
  const handleSubmitForm = (e) => {
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
      <ToDoSummery todos={todos} resetTaskList={resetTaskList}/>
      <ToDoForm handleSubmitForm={handleSubmitForm} task={task}  message={message}  handleChange={handleChange}  />        
      <ToDoView todos={todos} removeTask={removeTask}/>
    </Layouts>
  );
}

export default App;
