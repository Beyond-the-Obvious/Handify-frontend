import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import EditItemModal from './EditItem'
import Button from 'react-bootstrap/Button';
export default class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome to HandMade App</h1>
        <Row xs={1} md={4} className="g-4">
          {this.props.itemData.map((item, idx) => (

  
            <div key={idx} >
       <Card style={{ width: '18rem',padding: 10}} >
             <Card.Img src={item.imgURL} width="200" />
             <Card.Body>
             <Card.Text style={{ color: 'black' }}>
               {item.title}
               </Card.Text>
               <Card.Title style={{ color: 'black' }}>HandMade:</Card.Title>
               <Card.Text style={{ color: 'black' }}>
               {item.description}
               </Card.Text>
               <Card.Text style={{ color: 'black' }}>
               <Button onClick={() => this.props.deleteHandeMade(item._id)}>
                 delete
                </Button>
              <EditItemModal allData={item}/>
               </Card.Text>
             </Card.Body>
           </Card>
        
       </div>
       
      
          ))}
        </Row>
      </>
    );
  }
}
