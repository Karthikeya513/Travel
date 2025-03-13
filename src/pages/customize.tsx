import { useState } from "react";
import SearchBar from "@/components/SearchBar";


const destinationsList = ["Maldives", "Egypt", "Bali", "Dubai", "Japan", "Australia", "Thailand"];

const CustomizePage = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const handleSelectDestination = (destination: string) => {
    setSelectedDestination(destination);
    console.log("Selected:", destination);
    // Continue with the itinerary journey...
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Customize Your Trip</h1>
      <SearchBar destinations={destinationsList} onSelectDestination={handleSelectDestination} />
      
      {selectedDestination && (
        <div className="mt-6 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Selected Destination: {selectedDestination}</h2>
          {/* Itinerary flow starts here */}
        </div>
      )}
    </div>
  );
};

export default CustomizePage;
