'use client'
import { FaTrash } from 'react-icons/fa'

const DeleteConfirm = ({pet , petDelete}) => {
  return (
    <div>
        <label htmlFor="my_modal_6" className="btn btn-sm btn-outline border-amber-400">  <FaTrash />
Delete</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle border border-2 border-amber-400" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-light">Are You Sure You Want To Delete <span className='text-amber-400 font-semibold' >{pet.petName}</span> Adoption Post</h3>
    
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
      <label htmlFor="my_modal_6" onClick={petDelete} className="btn">Confirm</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default DeleteConfirm