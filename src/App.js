import './App.css';

import Addtask from './components/Addtask';
import Grid from '@mui/material/Grid';

function App() {
  
  return (
    <>
 

    <Grid container spacing={3}>
  <Grid item xs={8} style={{marginTop:"100px"}}>
  <Addtask/>



   
  </Grid>
  <Grid item xs>

  </Grid>

</Grid>

    </>

  )
}


export default App;
