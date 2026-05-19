import { revalidatePath } from "next/cache";

export const deletePet =async(petId)=>{
    'use server'
    const res = await fetch(`${process.env.PUBLIC_SERVER}/pets/${petId}`,{
        method:'DELETE'
    })
      const data = await res.json()
        if (data.deletedCount > 0) {
    revalidatePath('/Pets');
    revalidatePath('/dashboard');
  }
    return data;
}