import React, { useState, Fragment} from "react";  

import "../App.css" 
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { Link } from "react-router-dom";
 const Component =({contacts,setContacts}) => {
console.log(contacts)

  const [editFormData, setEditFormData] = useState({
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

  })

  const [editContactId, setEditContactId] = useState(null);

   

    const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData} ;
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  }
      const handleEditFormSubmit = (event) => {
      event.preventDefault();

    const editedContact ={
     id: editContactId,
    name: editFormData.name,
    number: editFormData.number,
    email: editFormData.email,
    experience: editFormData.experience,
    currentCompany: editFormData.currentCompany,
    expectedCTC: editFormData.expectedCTC,
    currentCTC: editFormData.currentCTC,
    noticePeriod: editFormData.noticePeriod,
    position: editFormData.position,
    currentLocation: editFormData.currentLocation,
    prefferedLocation: editFormData.prefferedLocation
   }

   const newContacts = [...contacts];

   const index = contacts.findIndex((contact)=> contact.id === editContactId);

   newContacts[index] = editedContact;
   setContacts(newContacts);
   setEditContactId(null)
  }

    const handleEditClick = (event, contact)=> {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
    name: contact.name,
    number: contact.number,
    email: contact.email,
    experience: contact.experience,
    currentCompany: contact.currentCompany,
    expectedCTC: contact.expectedCTC,
    currentCTC: contact.currentCTC,
    noticePeriod: contact.noticePeriod,
    position: contact.position,
    currentLocation: contact.currentLocation,
    prefferedLocation: contact.prefferedLocation,
    }

    setEditFormData(formValues);
  };

    const handleCancleClick = () => {
    setEditContactId(null);
  };

    const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=>contact.id === contactId);
    newContacts.splice(index,1);
    setContacts(newContacts);
  }

  return (<>
  <div className = "app-container"> 
  <form onSubmit={handleEditFormSubmit}>
  <table>
      <thead>
       <tr>
        <th>Name of Candidates</th>
        <th>Contact Number</th>
        <th>E-Mail</th>
        <th>Year of Experience</th>
        <th>Current Company</th>
        <th>Expected CTC</th>
        <th>Current CTC</th>
        <th>Notice Period</th>
        <th>Position</th>
        <th>Current Location</th>
        <th>Preffered Location</th>
        <th>Actions</th>
        </tr>    
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <Fragment>
            {editContactId === contact.id ? (
               <EditableRow 
               editFormData={editFormData}
               handleEditFormChange={handleEditFormChange}  
               handleCancleClick={handleCancleClick}
               />) :(
              <ReadOnlyRow contact={contact} 
               handleEditClick={handleEditClick} 
               handleDeleteClick={handleDeleteClick}/> 
               )}
           </Fragment>
       ))}
      </tbody>
  </table>
  </form>
  <Link  to="/create-new-contact"> <button className="add-contact"> Add a Contact + </button> </Link> 
</div>;
</>)
 };
 export default Component;
 