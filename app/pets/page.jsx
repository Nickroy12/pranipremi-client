
import { getPets } from "@/lib/data";
import PetFilter from "@/ui/PetFilter";


const PetPage = async () => {
  const petsData = await getPets();


  return (
    <div className="w-10/12 mx-auto p-5">
        <h1 className="text-4xl font-bold text-center">
        All Pets
      </h1>
      <PetFilter pets={petsData || []} />
    </div>
  );
};

export default PetPage;