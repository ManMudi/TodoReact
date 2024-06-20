import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import { addTodo, getTodo, updateTodo } from '../service/todoService';
import { useNavigate, useParams } from 'react-router-dom';

const AddTodo = () => {

    const[tittle,setTittle]=useState('')
    
    const[description,setDescription]=useState('');

    const[completed,setCompleted]=useState('');

    const navigator=useNavigate();

    const {id}=useParams();

    const handleResert=()=>{

    }

    useEffect(()=>{
    getTodo(id).then(response=>{
      setTittle(response.data.tittle);
      setCompleted(response.data.completed);
      setDescription(response.data.description);
    })
    },[id])

    const[errors,setErrors]=useState({tittle:'',description:'',completed:''})

    const saveOrUpdateTodo=(e)=>{
      e.preventDefault();


          const todo={tittle,description,completed};
         
          if(id){
             updateTodo(id,todo).then(response=>{
              console.table(response.data)
              navigator('/')
             }).catch(error=>{
              console.error(error)
             })
          }else{
            addTodo(todo).then(response=>{
              console.table(response.data)
              navigator('/')
             }).catch(error=>{
              console.error(error)
             })
          }
        
      }

      const validateForm=()=>{
        let valid=true;
        const errorCopy={...errors}

        if(tittle.trim){
          errorCopy.tittle=''
        }else{
          errorCopy.tittle='Todo Tittle is Required';
          valid=false;

        }

        if(description.trim){
          errorCopy.description=''
        }else{
          errorCopy.description='Todo Description is Required';
          valid=false;

        }

        if(completed){
          errorCopy.completed=''
        }else{
          errorCopy.completed='Todo Status is Required';
          valid=false;

        }
         setErrors(errorCopy);
         return valid;
      }
      
   const pageTittle=()=>{
    if(id){
      return <h2 className='text-center'>Edit todo</h2>
    }else{
      return <h2 className='text-center'>Add todo</h2>
    }
   }
    
    return (
      <Container ><br/><br/>
        <div style={{height:'571px',position:'relative', display:'inline-table',width:'100%'}}>
        <div className='container'>
        <div className='row'>
         <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTittle()}
          <div className='card-body'>
       <form >
  <div className="mb-3">
    <label className="form-label fs-5">Tittle</label>
    <input type="text"  className={`form-control ${errors.tittle ? 'is-invalid':''}`}   placeholder='Enter Todo Tittle' value={tittle} onChange={(e)=>setTittle(e.target.value)}/>
    {errors.tittle && <div className='invalid-feedback'>{errors.tittle}</div>}
  </div>
  <div className="mb-3">
    <label  className="form-label fs-5">Description</label>
    <input type="text" className={`form-control ${errors.description ? 'is-invalid':''}`} placeholder='Enter Todo description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
    {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
  </div>
  <div className="mb-3">
    <label  className="form-label fs-5">Completed</label>
  <select  className={`form-select-lg form-control ${errors.tittle ? 'is-invalid':''}`} placeholder='Select Todo Status'  value={completed} onChange={(e)=>setCompleted(e.target.value)}>
  <option value=''>Select Status</option>
  <option value="true">Yes</option>
  <option value="false">No</option>
</select>
{errors.completed && <div className='invalid-feedback'>{errors.completed}</div>}
  </div>
  <button type="button" className="btn btn-info btn-lg" onClick={(e)=>saveOrUpdateTodo(e)}>Submit</button>
  <button type="button" className="btn btn-warning btn-lg " style={{marginLeft:'25px'}} >Submit</button>
</form>
          </div>
         </div>
        </div>
         
        </div>
       </div>
       </Container>
    );
};

export default AddTodo;