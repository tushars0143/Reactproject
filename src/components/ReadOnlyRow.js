import React from 'react';
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return(
        <tr>
          <td>{contact.name}</td>
          <td>{contact.number}</td>
          <td>{contact.email}</td>
          <td>{contact.experience}</td>
          <td>{contact.currentCompany}</td>
          <td>{contact.expectedCTC}</td>
          <td>{contact.currentCTC}</td>
          <td>{contact.noticePeriod}</td>
          <td>{contact.position}</td>
          <td>{contact.currentLocation}</td>
          <td>{contact.prefferedLocation}</td>
          <td>
              <button 
              type = "button"
              onClick={(event) => handleEditClick(event, contact)}
              >
               Edit
              </button>
              <button type = "button" onClick={()=> handleDeleteClick(contact.id)}>Delete</button>
          </td>
        </tr>
    );
};
export default ReadOnlyRow


