import styled from 'styled-components';





export const T2=styled.div`
 position: relative;
    left: 300px;
`


export const Bulbtop=styled.div`
position: absolute;
top: 90px;
border-radius: 50%;
border: 5px solid yellow;
height: 6rem;
width: 50px;
background-color: ${props=>props.isOn ?'yellow':'white'};
flex-direction: column;
`
export const Bulbbotton=styled.button`
position: absolute;
top: 190px;
width: 30px;
height: 25px;
border-radius: 15%;
background-color: grey;
margin-left: 15px;




`
export const Bulbtop2=styled.div`
position: absolute;
top: 90px;
left: 450px;
border-radius: 50%;
border: 5px solid yellow;
height: 6rem;
width: 50px;
background-color: ${props=>props.isOn ?'yellow':'white'};
flex-direction: column;
`
export const Bulbbotton2=styled.button`
position: absolute;
top: 190px;
left: 450px;
width: 30px;
height: 25px;
border-radius: 15%;
background-color: grey;
margin-left: 15px;




`