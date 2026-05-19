export const getPets =async()=>{
    const res = await fetch(`${process.env.PUBLIC_SERVER}/pets`)
      const data = await res.json()
    return data;
}
export const petDetails =async(petId)=>{
    const res = await fetch(`${process.env.PUBLIC_SERVER}/pets/${petId}`)
      const data = await res.json()
    return data;
}