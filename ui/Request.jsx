"use client"
import React from 'react'
import { GiDogHouse } from 'react-icons/gi'

const Request = ({pet , request}) => {
     const modalId = `delete_modal_${pet._id}`;
     console.log(pet , "per");
     console.log({request} , "perr");
  return (
        <div>
          <label htmlFor={modalId} className="btn btn-sm btn-outline border-amber-400">
              <GiDogHouse />
              Request
          </label>
    
          <input type="checkbox" id={modalId} className="modal-toggle border border-2 border-amber-400" />
          
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="text-lg font-light">
                
              </h3>
              
              <div className="modal-action">
                <label htmlFor={modalId} onClick={() =>  request(request._id, "rejected")} className="btn">Reject</label>
                <label htmlFor={modalId} onClick={() =>  request(request._id, "approved")} className="btn">Approve</label>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Request