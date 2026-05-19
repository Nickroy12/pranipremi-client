import { revalidatePath } from "next/cache";


export const postPet = async (formData) => {
  "use server";

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
export const petUpdate = async (petId , formData) => {
  "use server";
  console.log(petId);
  const updatePet = Object.fromEntries(formData.entries());
  console.log(updatePet);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pets/${petId}`, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(updatePet),
  });
  const data = await res.json();
  console.log(data , "Update pet");
  if (data.modifiedCount > 0) {
    revalidatePath("/Pets");
    revalidatePath("/dashboard");
    revalidatePath("/pets");
  }
  return data;
};

export const deletePet = async (petId) => {
  "use server";
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
