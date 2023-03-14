import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/';
import {Card, CardImg} from 'react-bootstrap';
import Listdemo from './Listdemo';
import './Externalstyle.css';
function Child(props) {
    const products=props.prnds
    return ( 
        <div >
            
        {
            products.map((p)=>{
                return(
                    <Card key={p.id}>
                    <CardImg   variant="top" src={p.img} ></CardImg>
                    <Card.Body>
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Text>{p.desc}</Card.Text>
                        <Card.Footer>{p.price}</Card.Footer>
                    </Card.Body>
                </Card>
            
            
                )
            })       
}
<Listdemo></Listdemo>

        </div>
     );
}

export default Child;