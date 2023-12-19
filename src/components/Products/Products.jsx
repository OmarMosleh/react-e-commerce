import { Grid} from "@mui/material";
import Container from '@mui/material/Container';
import Product from "./Product/Product";

import React from 'react'
let items =[{id:"1",name:"phone",price:"500$", img: "https://th.bing.com/th/id/R.dc5d6e1c294644eb3d92ec9a3771e799?rik=Al0%2f%2fPXz9S0%2fMQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsmartphone%2fsmartphone_PNG8528.png&ehk=PWhh7cEjm2hbhHD1%2fkvAphmEmJzFLvz2%2bzWdzmLqJWk%3d&risl=1&pid=ImgRaw&r=0"},
{id:"1",name:"phone",price:"500$", img: "https://th.bing.com/th/id/R.dc5d6e1c294644eb3d92ec9a3771e799?rik=Al0%2f%2fPXz9S0%2fMQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsmartphone%2fsmartphone_PNG8528.png&ehk=PWhh7cEjm2hbhHD1%2fkvAphmEmJzFLvz2%2bzWdzmLqJWk%3d&risl=1&pid=ImgRaw&r=0"},
{id:"1",name:"phone",price:"500$", img: "https://th.bing.com/th/id/R.dc5d6e1c294644eb3d92ec9a3771e799?rik=Al0%2f%2fPXz9S0%2fMQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsmartphone%2fsmartphone_PNG8528.png&ehk=PWhh7cEjm2hbhHD1%2fkvAphmEmJzFLvz2%2bzWdzmLqJWk%3d&risl=1&pid=ImgRaw&r=0"},
{id:"1",name:"phone",price:"500$", img: "https://th.bing.com/th/id/R.dc5d6e1c294644eb3d92ec9a3771e799?rik=Al0%2f%2fPXz9S0%2fMQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsmartphone%2fsmartphone_PNG8528.png&ehk=PWhh7cEjm2hbhHD1%2fkvAphmEmJzFLvz2%2bzWdzmLqJWk%3d&risl=1&pid=ImgRaw&r=0"},
{id:"1",name:"phone",price:"500$", img: "https://th.bing.com/th/id/R.dc5d6e1c294644eb3d92ec9a3771e799?rik=Al0%2f%2fPXz9S0%2fMQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsmartphone%2fsmartphone_PNG8528.png&ehk=PWhh7cEjm2hbhHD1%2fkvAphmEmJzFLvz2%2bzWdzmLqJWk%3d&risl=1&pid=ImgRaw&r=0"},
{id:"1",name:"phone",price:"500$", img: "https://th.bing.com/th/id/R.dc5d6e1c294644eb3d92ec9a3771e799?rik=Al0%2f%2fPXz9S0%2fMQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsmartphone%2fsmartphone_PNG8528.png&ehk=PWhh7cEjm2hbhHD1%2fkvAphmEmJzFLvz2%2bzWdzmLqJWk%3d&risl=1&pid=ImgRaw&r=0"},
{id:"1",name:"phone",price:"500$", img: "https://th.bing.com/th/id/R.dc5d6e1c294644eb3d92ec9a3771e799?rik=Al0%2f%2fPXz9S0%2fMQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsmartphone%2fsmartphone_PNG8528.png&ehk=PWhh7cEjm2hbhHD1%2fkvAphmEmJzFLvz2%2bzWdzmLqJWk%3d&risl=1&pid=ImgRaw&r=0"},
{id:"1",name:"phone",price:"500$", img: "https://th.bing.com/th/id/R.dc5d6e1c294644eb3d92ec9a3771e799?rik=Al0%2f%2fPXz9S0%2fMQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsmartphone%2fsmartphone_PNG8528.png&ehk=PWhh7cEjm2hbhHD1%2fkvAphmEmJzFLvz2%2bzWdzmLqJWk%3d&risl=1&pid=ImgRaw&r=0"},
{id:"2",name:"mac-book",price:"1000$", img:"https://th.bing.com/th/id/OIP.oVqhQ6YzJeg0cSwyR2LkUgHaE-?rs=1&pid=ImgDetMain"}];
function Products() {
  return (
    <>
    <Container maxWidth="lg">
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
  {items.map((item)=>(
  <Product key={item.id} props={item}/>
  ))}
</Grid>
    </Container>

    </>
  )
}

export default Products