
  "use server";
import { revalidatePath } from "next/cache";


export const postPet = async (formData) => {


  const newPet = Object.fromEntries(formData.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPet),
  });

  const data = await res.json();


  if (data.insertedId) {
    revalidatePath("/Pets");
    revalidatePath("/dashboard");
     revalidatePath("/pets");
  }

  return data;
};
export const AdoptReq = async (petId, data) => {
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/pets/${petId}/adoption-requests`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return await res.json();
};
export const handleAction = async (requestId, status) => {
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/adoption-requests/${requestId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );

  const data = await res.json();
  return data;
};

export const petUpdate = async (petId , formData) => {


  const updatePet = Object.fromEntries(formData.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pets/${petId}`, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(updatePet),
  });
  const data = await res.json();
  
  if (data.modifiedCount > 0) {
    revalidatePath("/Pets");
    revalidatePath("/dashboard");
    revalidatePath("/pets");
  }
  return data;
};

export const deletePet = async (petId) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pets/${petId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/Pets");
    revalidatePath("/dashboard");
     revalidatePath("/pets");
  }
  return data;
};
