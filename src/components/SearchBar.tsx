import { useState } from "react";
import { useRouter } from "next/router";

interface SearchBarProps {
  destinations: string[];
  onSelectDestination: (destination: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ destinations, onSelectDestination }) => {
  const [query, setQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState<string[]>(destinations);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    // Filter destinations dynamically
    setFilteredDestinations(
      destinations.filter((destination) =>
        destination.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Pick your destination"
        className="w-full p-3 border rounded-lg shadow-md focus:outline-none"
      />
      {query && filteredDestinations.length > 0 && (
        <ul className="absolute w-full bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
          {filteredDestinations.map((destination, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => onSelectDestination(destination)}
            >
              {destination}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
