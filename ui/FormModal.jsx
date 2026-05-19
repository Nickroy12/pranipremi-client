'use client'

import React from "react";
import PetForm from "./PetForm";

const Form = ({ postPet }) => {
  return (
    <div>
      {/* Open Button */}
      <label
        htmlFor="my_modal_7"
        className="btn font-light bg-amber-400 text-white"
      >
        Add Pet
      </label>

      {/* Modal Toggle */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />

      {/* Modal */}
      <div className="modal" role="dialog">
        <div className="modal-box max-w-3xl p-0">

          <PetForm postPet={postPet} />

        </div>

        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default Form;