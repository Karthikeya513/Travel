import { Trip } from "@/types";

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{trip.name}</h3>
      <p>Price: ₹{trip.price}</p>
      <p>Duration: {trip.duration}</p>
      <p>Amenities: {trip.amenities.join(", ")}</p>
    </div>
  );
};

export default TripCard;
