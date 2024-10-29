import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { tablecontext } from './App';
import { tablecontext } from './App';
import { Link, useNavigate } from 'react-router-dom';
import Tablee from './Tablee';

const CreateProduct = () => {
  const {tabledata,settabledata} = useContext(tablecontext);
  // console.log(tabledata);
  const Navigate =useNavigate();
    const [input, setinput] = useState({id:'',brand:"",description:"",price:"",images:""}); 
   
   const getvalues=(e)=>{
    setinput({...input,[e.target.name]:e.target.value});
    // console.log(tabledata);
   
   };
    const display =(event) =>{
      event.preventDefault();
      const additems=[...tabledata,input]
      settabledata(additems);
      // console.log(additems);
      Navigate("/");
     
    
    };
    console.log(tabledata);
    
  return (
    <div>
        <Form style={{width:"400px",margin:"auto",border:"2px solid brown",padding:"30px",marginTop:"50px"}}  onSubmit={display}>
      <Form.Group className="mb-3">
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" placeholder="Enter Id" onChange={getvalues} name="id"/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Brand</Form.Label>
        <Form.Control type="text" placeholder="Brand" onChange={getvalues} name="brand" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Category" onChange={getvalues} name="description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" onChange={getvalues} name="price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="image-form">
      <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" id='imageUrl' placeholder="Image Url" onChange={getvalues} name="images" />
      </Form.Group>
     


      {/* <label for="image-url">Imageb URL</label><br></br>
      <input type='text' id='image-url' name="image-url" placeholder='Enter image url' required></input><br></br> */}
     
     {/* <Link to={"/"}> */}
      <Button variant="primary" type="submit"style={{marginTop:"10px"}}>
        Add Product
      </Button>
      {/* </Link> */}
    </Form>
    </div>
  )
}

export default CreateProduct