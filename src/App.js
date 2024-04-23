import React ,{useState}from 'react'
import { Box, Container, Stack } from '@mui/material';
import Heading from './Component/Head';
import {Bulbtop,Bulbbotton,Bulbtop2,Bulbbotton2 } from './Component/Style';





export default function App() {
  const [togeFun,setTog]=useState(false)
  const [togeFun2,setTog2]=useState(false)


     const funToggle= () =>{
    setTog(!togeFun)
    };


     const funToggle2= () =>{
     setTog2(!togeFun2)
     };



  return (
    <div>
      <Heading/>
     
   <Box sx={{backgroundColor: '#96a3a8',height:'300px',width:'300px',marginLeft:'250px'}}>
  
    <Container>
     <Stack direction={'row'}>
<Bulbtop  isOn={togeFun}/>
<Bulbbotton onClick={funToggle}>{togeFun?'on':'off'}</Bulbbotton>

<Bulbtop2  isOn={togeFun2}/>
<Bulbbotton2 onClick={funToggle2}>{togeFun2?'on':'off'}</Bulbbotton2>

</Stack>
</Container>
</Box>
    
    
  </div>

)
};

   