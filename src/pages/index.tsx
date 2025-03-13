import { useEffect, useState } from "react";
import DestinationCard from "@/components/DestinationCard";
import { Destination } from "@/types";

const HomePage = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const response = await fetch("https://json-data-1wm2.onrender.com/featured-destination");
        const data = await response.json();

        if (data.destination) {
          setDestinations(data.destination);
          setFilteredDestinations(data.destination); // Initially, show all destinations
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    getDestinations();
  }, []);

  // Search Filter
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === "") {
      setFilteredDestinations(destinations); // Show all if search is empty
    } else {
      const filtered = destinations.filter((destination) =>
        destination.title.toLowerCase().includes(value)
      );
      setFilteredDestinations(filtered);
    }
  };

  if (loading) return <p className="text-center text-xl font-semibold text-gray-600 mt-10">Loading destinations...</p>;

  return (
    <div className="p-6">
    {/* Search Bar */}
    <div className="flex justify-center mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a destination..."
        className="w-full max-w-md p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>

    {/* Destinations Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredDestinations.length > 0 ? (
        filteredDestinations.map((destination) => (
          <DestinationCard key={destination.handle} destination={destination} />
        ))
      ) : (
        <p className="col-span-3 text-center text-lg font-medium text-gray-700">No destinations found.</p>
      )}
    </div>
  </div>
  );
};

export default HomePage;
