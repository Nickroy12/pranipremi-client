export const getPets =async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pets`)
      const data = await res.json()
    return data;
}
export const petDetails = async (petId, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pets/${petId}`, {
    headers: {
      authorization: `Bearer ${token.token}`,
    },
  });
  const data = await res.json();
  return data;
};
export const adoptPet = async()=>{
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/adoption-requests`)
      const data = await res.json()
    return data;
}

export const getAdopt = async (petId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/pets/${petId}/adoption-requests`,
   
  );

  return await res.json();
};
