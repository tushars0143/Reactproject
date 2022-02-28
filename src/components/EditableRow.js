import React from 'react'
const EditableRow = ({editFormData, handleEditFormChange, handleCancleClick }) => {

    return(
        <tr>
            <td>
                <input
                 type = "text"
                 required ="required"
                 placeholder= "Enter a name"
                 name = "name"
                 value={editFormData.name}
                 onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                 type = "text"
                 required ="required"
                 placeholder= "Enter a number"
                 name = "number"
                 value={editFormData.number}
                 onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                 type = "text"
                 required ="required"
                 placeholder= "Enter a email"
                 name = "email"
                 value={editFormData.email}
                 onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                 type = "text"
                 required ="required"
                 placeholder= "Enter a experience"
                 name = "experience"
                 value={editFormData.experience}
                 onChange={handleEditFormChange}
                 ></input>
            </td>

            <td>
                <input
                 type = "text"
                 required ="required"
                 placeholder= "Enter a currentCompany"
                 name = "currentCompany"
                 value={editFormData.currentCompany}
                 onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                 type = "text"
                 required ="required"
                 placeholder= "Enter a expectedCTC"
                 name = "expectedCTC"
                 value={editFormData.expectedCTC}
                 onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                
                 type = "text"
                 required ="required"
                 placeholder= "Enter a currentCTC"
                 name = "currentCTC"
                 value={editFormData.currentCTC}
                 onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                 type = "text"
                 required ="required"
                 placeholder= "Enter a noticePeriod"
                 name = "noticePeriod"
                 value={editFormData.noticePeriod}
                 onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                 type = "text"
                 required ="required"
                 placeholder= "Enter a position"
                 name = "position"
                 value={editFormData.position}
                 onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                 type = "text"
                 required ="required"
                 placeholder= "Enter a currentLocation"
                 name = "currentLocation"
                 value={editFormData.currentLocation}
                 onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                 type = "text"
                 required ="required"
                 placeholder= "Enter a prefferedLocation"
                 name = "prefferedLocation"
                 value={editFormData.prefferedLocation}
                 onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancleClick}>Cancle</button>
            </td>
        </tr>
    )
};

export default EditableRow
