'use client'
import { FaTrash } from 'react-icons/fa'

const DeleteConfirm = ({ pet, petDelete }) => {
  const modalId = `delete_modal_${pet._id}`;

  return (
    <div>
      <label htmlFor={modalId} className="btn btn-sm btn-outline border-amber-400">
        <FaTrash />
        Delete
      </label>

      <input type="checkbox" id={modalId} className="modal-toggle border border-2 border-amber-400" />
      
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-light">
            Are You Sure You Want To Delete <span className="text-amber-400 font-semibold">{pet.petName}</span> Adoption Post
          </h3>
          
          <div className="modal-action">
            <label htmlFor={modalId} className="btn">Close!</label>
            <label htmlFor={modalId} onClick={petDelete} className="btn">Confirm</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirm