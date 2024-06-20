import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { completeTodo, deleteTodo, inCompleteTodo, listTodo } from '../service/todoService';
import { useNavigate} from 'react-router-dom';

const Test = () => {

  const[todos,setTodos]=useState([]);

  const navigator=useNavigate();



  const handleUpdate=(id)=>{
    console.log(id);
  navigator(`/edit-todo/${id}`)
  }

  const handleDelete=(id)=>{
    deleteTodo(id).then(response=>{
      listTodo();
    })
  }

  const handleComplete=(id)=>{
    completeTodo(id).then(response=>{
    listTodo();
    })
  }
  
  const handleInComplete=(id)=>{
    inCompleteTodo(id).then(response=>{
    listTodo();
    })
  }

   useEffect(()=>{
   listTodos();
   })  

   const listTodos=()=>{
    listTodo().then(response=>{
      setTodos(response.data)
      }).catch(error=>{
        console.error(error)
      })
   }

   const addTodo=()=>{
    navigator("/add-todo")
   }


    return (
        <Container  >
          <div style={{height:'620px',position:'relative', display:'inline-table',width:'100%'}}>
       <div className='container'>
        <h2 className='text-center'>List of Todo</h2>
        <button className='btn btn-primary mb-2' onClick={addTodo}>Add Todo</button>
        <table className='table table-striped-column table-bordered table-hover table-sm '> 
          <thead className='table-info' align='center'>
            <tr>
              <th >Todo Tittle</th>
              <th>Todo Description</th>
              <th>Todo Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody align='center'>
           {
            todos.map(todo=>
              <tr key={todo.id}>
               <td>{todo.tittle}</td>
               <td>{todo.description}</td>
               <td>{todo.completed ? 'Yes':'No'}</td>
               <td align='center'><button className='btn btn-info btn-sm' onClick={()=>handleUpdate(todo.id)}>Update</button>
               <button className='btn btn-warning btn-sm' style={{marginLeft:'5px',marginRight:'5px'}} onClick={()=>handleDelete(todo.id)}>Delete</button>
               <button className='btn btn-success btn-sm' style={{marginLeft:'5px',marginRight:'5px'}}onClick={()=>handleComplete(todo.id)}>Complete</button>
               <button className='btn btn-dark btn-sm'  onClick={()=>handleInComplete(todo.id)}>Incomplete</button>
               </td>
              </tr>
            )
           }
          </tbody>
        </table>
       </div>
       </div>
      </Container>
    );
};

export default Test;