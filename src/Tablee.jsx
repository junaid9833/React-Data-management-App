import React, { createContext, useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { tablecontext } from './App';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Autocomplete, TextField, top100Films } from '@mui/material'
import { MDBIcon } from "mdb-react-ui-kit"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Tablee = () => {
  const {tabledata,settabledata,id,setid,edit,setedit,srh,setsrh} = useContext(tablecontext);

  const [show, setShow] = useState(false);
  const [deletion, setdeletion] = useState(false);
  const [search, setsearch] = useState(''); 
 const [deleteitem, setdeleteitem] = useState({});
  const handleClose = () => setShow(false); 

   const deleteclose =() => {
   const newtable=tabledata.filter((nt)=>nt.id !== deleteitem.id);
    settabledata(newtable);
    setdeletion(false);
    toast(`${deleteitem.title}  deleted successfully`)
    
   }
  // setShow(false);
  const handleShow = (data) =>{
    setid(data);
    setShow(true);
  }    
 
 const deleteShow = (datas,datass)=>{
  setdeletion(true);
 setdeleteitem(datas);
 setid(datass);
 
 
 }
 const deleteoff =()=>{
  setdeletion(false);
 }
  const filterdata=tabledata.filter((i)=>i.id === id);
  const deletedata=tabledata.filter((i)=>i.id === id);
  console.log(filterdata);
  console.log(deletedata);
  
  const editdatas=(edited)=>{
    setedit(edited);

  }
const searchproduct=(e)=>{
  setsearch(e.target.value)
  }


const searchedproduct=()=>{
const searchedtable=tabledata.filter((i)=>{
  return i.title.toLowerCase().match(search.toLocaleLowerCase());
});
settabledata(searchedtable);
  // console.log(search);

}
  return (
    <>
    <ToastContainer
    />
    <div>
    
       <Modal show={deletion} onHide={deleteclose}>
     
     {deletedata.map((item) => {
               return (
                 <div  style={{backgroundColor:"goldenrod"}}>
   
         <Modal.Title style={{textAlign:"center",fontWeight:"bold",marginTop:"10px",fontSize:"45px"}}>{item.brand||item.title}</Modal.Title>
         <div style={{display:"flex",marginTop:"20px"}}>
         {item && item.images &&  <Modal.Body><img src={item.images[0]||item.images[1] }  style={{width:"220px",height:"210px",marginBottom:"0px",marginTop:"10px",textAlign:"center"}}/> </Modal.Body>}
         <Modal.Body style={{marginTop:"60px",fontStyle:"italic"}}>{item.description}</Modal.Body>
           </div>
           <Modal.Body style={{fontStyle:"italic",marginLeft:"56px",marginTop:"0px",fontWeight:"bold"}}>Price: {item.price} /-</Modal.Body>
      <Modal.Body style={{marginTop:"35px",fontStyle:"italic",marginRight:"50px",fontSize:"26px",fontWeight:"bold"
      }}>Are You Sure to Delete this Item..?</Modal.Body>
    
    
    
       <Modal.Footer>
         <Button  onClick={deleteoff}  style={{border:"none",backgroundColor:"darkgreen"}}>
           Close
         </Button>
         <Button   onClick={deleteclose} style={{backgroundColor:"darkred",border:"none"}}>
          Delete
         </Button>
        
       </Modal.Footer>
      
        </div>
        
         )  ; 
         }) }  
      
     </Modal>
    
      <Modal show={show} onHide={handleClose}>
     
      {filterdata.map((item) => {
                return (
                  <div  style={{backgroundColor:"goldenrod"}}>
    
          <Modal.Title style={{textAlign:"center",fontWeight:"bold",marginTop:"10px",fontSize:"45px"}}>{item.brand||item.title}</Modal.Title>
          <div style={{display:"flex",marginTop:"20px"}}>
          {item && item.images &&  <Modal.Body><img src={item.images[0]||item.images[1] }  style={{width:"220px",height:"210px",marginBottom:"0px",marginTop:"10px"}}/> </Modal.Body>}
       <Modal.Body style={{marginTop:"35px",fontStyle:"italic",marginRight:"50px",fontSize:"17px"}}>{item.description}</Modal.Body>
       </div>
      
      <Modal.Body style={{fontStyle:"italic",marginLeft:"56px",marginTop:"0px",fontWeight:"bold"}}>Price: {item.price} /-</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{border:"none",backgroundColor:"darkred"}}>
            Close
          </Button>
          <Button  onClick={handleClose} style={{backgroundColor:"darkgreen",border:"none"}}>
           Buy Item
          </Button>
        </Modal.Footer>
         </div>
           )  ; 
          }) } 
         </Modal>
         
       <div style={{display:"flex"}}>
         <input id="mdb-5-search-input" autocomplete="off" type="search" class="form-control" placeholder="Search Product" value={search} onChange={searchproduct}  style={{width:"200px",marginLeft:"auto",marginRight:"20px",marginTop:"20px",borderRadius:"100px",border:" 1px solid darkcyan",textAlign:"center",marginBottom:"20px"}}/> 
        
          <MDBIcon fas icon="search" onClick={searchedproduct} style={{marginTop:"30px",marginRight:"50px",cursor:"pointer"}}/> 
      
          </div>
       
         <Table striped bordered hover style={{width: "100%"}}>
         
      <thead>
        <tr style={{padding:"10px",borderBottom:"1px solid black",borderTop:"1px solid black",backgroundColor:"yellowgreen",textAlign:"center"}}>
         
          <th>Id</th>
          <th>Brand</th>
          <th>Description</th>
          <th>Price</th>
         <th>Image</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {tabledata.map((item) => {
                return (
                 
      <tbody style={{backgroundColor:"white",fontWeight:"normal",border:"black",textAlign:"center"}}>
        <tr style={{color:"darkred"}}>
          <td>{item.id}</td>
          <td>{item.brand||item.title}</td>                    
          <td>{item.description}</td>
          <td>{item.price}</td>
          {/* `url(${image5})` */}
          {item && item.images &&<td><img src={item.images[0]||item.images[1] || `url(${item.images})`} style={{width:"20px",height:"40px"}} /> </td>}
         
           <td>{<EyeOutlined style={{color:"green",cursor:"pointer",marginTop:"16px"}}  onClick={()=> handleShow (item.id) } />}</td>
         <Link to={"/editform"}>
          <td>{<EditOutlined style={{color:"blue",marginTop:"24px",}} onClick={()=>editdatas(item)}/>}</td>
          </Link>
          <td>{<DeleteOutlined style={{color:"darkred",marginTop:"16px"}} onClick={()=>deleteShow (item,item.id) }/>}</td>
        </tr>
      </tbody>
      
       )  ; 
      }) } 
        </Table>
      
      <Link  to={"/product"}>
   <button  style={{position:"absolute",right:"10px",border:"none",backgroundColor:"darkcyan",borderRadius:"25px",color:"white",fontSize:"16px",fontWeight:"bold",padding:"8px 18px",marginBottom:"15px"}}>Create Products</button>
   </Link>
 
    </div>
     </>
  )

}
export default Tablee


