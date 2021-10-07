import React,{useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { field: 'id', headerName: 'Task', width: 150 },
    { field: 'Task', headerName: 'Task', width: 70 },
    { field: 'Delete', headerName: 'Delete', width: 130 },
    { field: 'Finished', headerName: 'Finished', width: 130 },
    
    
  ];
  
  const rows = [
    { id: 1,Task:"Some Task", Delete: 'Snow', Finished: 'Jon', age: 35 },
   
   
  ];

function Showtask(props) {

  let data=[];
  if(localStorage.getItem("Data") )
  {
   data=JSON.parse(localStorage.getItem("Data"))
  }
 
    return (
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
    
      />
    </div>
    )
}

export default Showtask
