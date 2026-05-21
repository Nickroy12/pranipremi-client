export const getPets =async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pets`)
      const data = await res.json()
    return data;
}
export const petDetails =async(petId)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pets/${petId}`)
      const data = await res.json()
    return data;
}
