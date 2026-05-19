
import { getPets } from "@/lib/data";
import PetFilter from "@/ui/PetFilter";


const PetPage = async () => {
  const petsData = await getPets();
  console.log(petsData ,"prani");

  return (
    <div className="w-10/12 mx-auto p-5">
      <PetFilter pets={petsData || []} />
    </div>
  );
};

export default PetPage;