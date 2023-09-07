import logo from './logo.svg';
import './App.css';
import React , {useState, useEffect} from 'react';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';
import 'bootstrap/dist/css/bootstrap.css';

import Layouts from './component/Layouts';
import Header from './component/Header';
import ToDoSummery from './component/ToDoSummery';

import styled from 'styled-components';


function App() {

  const [task, setTask] = useState('')
  const [todos, setTodos]= useState(loadFromStorage)
  const [message, setMessage] =useState('')
  
  function loadFromStorage(){
    const savedToDo = localStorage.getItem('todos');
    return savedToDo ? JSON.parse(savedToDo) : []
  }

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

  const Wrapper = styled.div `
    max-width: 600px;
    margin: 20px auto;
  `;

  //const Header = 

  useEffect(() => {
    //console.log('saving ', todos );
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Wrapper>
      <Header title="To Do Application." />
      <ToDoSummery todos={todos} resetTaskList={resetTaskList}/>
      <ToDoForm handleSubmitForm={handleSubmitForm} task={task}  message={message}  handleChange={handleChange}  />        
      <ToDoList todos={todos} removeTask={removeTask}/>
    </Wrapper>
  );
}

export default App;
