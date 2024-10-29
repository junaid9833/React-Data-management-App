import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { tablecontext } from './App';
import { useNavigate } from 'react-router-dom';

const Editform = () => {
    const {tabledata,settabledata,id,setid,edit,setedit} = useContext(tablecontext);

    const [editedvalues, seteditedvalues] = useState({id:'',brand:"",description:"",price:"",images:""}); 
    const Navigate =useNavigate();
    const handleEdit=(e)=>{
    
      seteditedvalues({...editedvalues,[e.target.name]:e.target.value});
     
      
      // console.log(editedvalues);
     };
     const eddditedvalues =(event) =>{
      event.preventDefault();
settabledata((tdata) =>{
  const newproduct = tdata.map((item) => {
    if (item.id === edit.id) {
      const newproduct = {
        ...item,
        id: editedvalues.id,
        brand: editedvalues.brand,
        description: editedvalues.description,
        price: editedvalues.price,
        images: editedvalues.images
      };
        // console.log(newproduct);
        return newproduct; 
         }
    return item;
  });
     return newproduct;
});   
Navigate("/");
    };
 
    //  seteditedvalues({id:'',brand:"",description:"",price:"",images:""});
    
    // console.log(tabledata);
  return (  
    <div>
         {/* {edddit.map((item) => {
                return ( */}
          <Form style={{width:"400px",margin:"auto",border:"2px solid brown",padding:"30px",marginTop:"90px"}} onSubmit={eddditedvalues}  >
      <Form.Group className="mb-3">
        <Form.Label>Id</Form.Label>
        <Form.Control type='text' placeholder='enter Id' defaultValue={edit.id} onChange={handleEdit} name="id"/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Brand</Form.Label>
        <Form.Control type="text" placeholder="Brand"  defaultValue={edit.brand || edit.title}  onChange={handleEdit} name="brand"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description"  defaultValue={edit.description}  onChange={handleEdit} name="description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price"  defaultValue={edit.price}  onChange={handleEdit} name="price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="image-form">
      <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" id='imageUrl' placeholder="Image Url"  defaultValue={edit.images}  onChange={handleEdit} name="images" />
      </Form.Group>
  
    
      <Button variant="primary" type="submit"style={{marginTop:"10px"}}>
        Edit Product Details
      </Button>
     
    </Form>
      {/* )  ; 
    }) }  */}
    </div>
  )
}

export default Editform