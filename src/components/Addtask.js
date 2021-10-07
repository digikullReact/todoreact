import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Showtask from './Showtask';



function Addtask() {

 

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [state,setState]=useState([]) 

  /// FOR INDIVIDUAL TASK
  const [task,setTask]=useState({
    id:"",
    Task:""
  }) // {id:! ,Task:"Eat lunch"}


  const handleChange=(event)=>{
    let random=randomInteger(1,10000)
  
    setTask({id:random,Task:event.target.value});

  }

  const pushTask=()=>{
    

    setState([...state,task])
    const item=localStorage.getItem("Data",JSON.stringify(state));
    if(item)
    {
      const nt=JSON.parse(item)
      nt.push(task)

      localStorage.setItem("Data",JSON.stringify(nt));
    }
    else{
      localStorage.setItem("Data",JSON.stringify([task]));

    }

   
  }
    return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Task" variant="outlined"  onChange={handleChange}/>
        <Button variant="contained"  onClick={pushTask}>Add Task</Button>


        <Showtask taskData={state}/>
 
      </Box>
    )
}

export default Addtask
