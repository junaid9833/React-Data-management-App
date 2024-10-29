
import { createContext, useEffect, useState } from 'react';
import './App.css';
import CreateProduct from './CreateProduct';
import Tablee from './Tablee';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import Editform from './Editform';



const tablecontext =createContext();

function App() {
  const [tabledata, settabledata] = useState([]);
  const [id, setid] = useState([]);
  const [edit, setedit] = useState([]); 
  const [srh, setsrh] = useState([]);
  useEffect(() => {
    
    axios.get('https://dummyjson.com/products').then((datas)=>settabledata(datas.data.products));
    
    
     
    }, [settabledata])
    
    console.log(tabledata);
  return (
    <div>
     
      <BrowserRouter>
      <tablecontext.Provider value={{tabledata,settabledata,id,setid,edit,setedit,srh,setsrh}}>
      <Routes>
     
      <Route path="/" element={<Tablee/>}/>
        <Route path="/product" element={<CreateProduct/>}/>
       <Route path='/editform' element={<Editform/>}/>
        </Routes>
        </tablecontext.Provider>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
export {tablecontext}
