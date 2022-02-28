import React, { useEffect, useState } from 'react'
import data from "./mock-data.json";
import CreateNewContact from './components/CreateNewContact';
import {
  BrowserRouter,
  Routes,
  Route
}  from "react-router-dom";
import Component from './components/component';

function App() {
 
  const [contacts , setContacts] = useState(data);
  console.log('contacts',contacts);

  // useEffect(()=>{
  //   if(!localStorage.getItem('data')){
  //     localStorage.setItem('data',JSON.stringify(data))
  //   }
  //     setContacts(JSON.parse(localStorage.getItem('data')))
  // },[])
  
  return (
    
     
   <Routes>
      <Route path="/" element={<Component contacts={contacts} setContacts={setContacts}/>}/>

      <Route path="/create-new-contact" element={<CreateNewContact contacts={contacts} setContacts={setContacts}/>} /> 
    </Routes>
      
  )
}

export default App
