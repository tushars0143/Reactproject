import React, { useEffect, useState } from 'react'
import {nanoid} from 'nanoid';
import { useNavigate } from 'react-router-dom';
function CreateNewContact({contacts,setContacts}) {
  const navigate =useNavigate ();
    const [addformData, setAddFormData] = useState({
      name: '',
      number: '',
      email: '',
      experience: '',
      currentCompany: '',
      expectedCTC: '',
      currentCTC: '',
      noticePeriod: '',
      position: '',
      currentLocation: '',
      prefferedLocation: ''
    });
    useEffect(()=>{
      const data = localStorage.getItem('data');
      console.log('data',JSON.parse(data))
    },[])
    const handleAddFormSubmit = (event) => {
        // event.preventDefault();
      
        let newContacts = {
          id: nanoid(),
          name: addformData.name,
          number:addformData.number,
          email:addformData.email,
          experience:addformData.experience,
          currentCompany:addformData.currentCompany,
          expectedCTC:addformData.expectedCTC,
          currentCTC:addformData.currentCTC,
          noticePeriod:addformData.noticePeriod,
          position:addformData.position,
          currentLocation:addformData.currentLocation,
          prefferedLocation:addformData.prefferedLocation,
         };
    
         newContacts = [...contacts , newContacts];
         setContacts(newContacts)
        //  localStorage.setItem('data',JSON.stringify(newContact))
         navigate('/');
      };
      const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
    
        const newFormData = {...addformData};
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      };
  return (
    <div className = "registration" > 
  <form onSubmit={handleAddFormSubmit} style={{display: "flex", flexDirection: "column"}}>
    <div className ="row">
        <div className="col-12">
        <h1>CreateNewContact</h1>
        </div>
     </div>

  <div className="front">    
  <div className="form-group">
    <label className='fsize'>Name of Candidates:</label>  
    <input 
    type ="text" 
    name= "name"
    required = "required"
    onChange={handleAddFormChange}
  />
  </div> 

  <div className ="form-group">
  <label className='fsize'>Contact Number:</label>  
  <input 
    type ="text" 
    name= "number"
    required = "required"
    onChange={handleAddFormChange}
  />
  </div>
  
  <div className = "form-group">
  <label className='fsize'>E-Mail:</label>  
  <input 
    type ="text" 
    name= "email"
    required = "required"
    onChange={handleAddFormChange}
  />
  </div>
  
  <div className ="form-group">
  <label className='fsize'>Year of Experience:</label> 
  <input 
    type ="text" 
    name= "experience"
    required = "required"
    onChange={handleAddFormChange}
  />
  </div>

  <div className ="form-group">
  <label className='fsize'>Current Company:</label> 
  <input 
    type ="text" 
    name= "currentCompany"
    required = "required"
    onChange={handleAddFormChange}
  />
   </div>

  <div className ="form-group">
  <label className='fsize'>Expected CTC:</label> 
  <input 
    type ="text" 
    name= "expectedCTC"
    required = "required"
    onChange={handleAddFormChange}
  />
   </div>
  
  <div className ="form-group">
  <label className='fsize'>Current CTC:</label> 
  <input 
    type ="text" 
    name= "currentCTC"
    required = "required"
    onChange={handleAddFormChange}
  />
   </div>
  
   <div className ="form-group">
  <label className='fsize'>Notice Period:</label> 
  <input 
    type ="text" 
    name= "noticePeriod"
    required = "required"
    onChange={handleAddFormChange}
  />
   </div>
  
   <div className ="form-group">
  <label className='fsize'>Position:</label> 
  <input 
    type ="text" 
    name= "position"
    required = "required"
    onChange={handleAddFormChange}
  />
   </div>
  
   <div className ="form-group">
  <label className='fsize'>Current Location:</label> 
  <input 
    type ="text" 
    name= "currentLocation"
    required = "required"
    onChange={handleAddFormChange}
  />
   </div>
  
   <div className ="form-group">
  <label className='fsize'>Preffered Location:</label> 
  <input 
    type ="text" 
    name= "prefferedLocation"
    required = "required"
    onChange={handleAddFormChange}
  />
   <div id= "btn">
   <button type ="submit">Submit</button>
   </div> 
   </div>
</div>
</form>
</div>
  )
}

export default CreateNewContact
