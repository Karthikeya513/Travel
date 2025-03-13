import { useEffect, useState } from "react";
import { useRouter } from "next/router";


interface Trip {
  name: string;
  price: string;
  duration: string;
  amenities: string[];
}

const DestinationPage = () => {
  const router = useRouter();
  const { handle } = router.query;
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!handle) return;

    fetch(`https://json-data-1wm2.onrender.com/destination/${handle}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.trips)) {
          setTrips(data.trips);
        } else {
          setTrips([]); // Ensure it's an array even if API response is incorrect
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching trips:", error);
        setTrips([]);
        setLoading(false);
      });
  }, [handle]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-extrabold mb-8 bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg">
        Trips to {handle}
      </h1>

      {loading ? (
        <p className="text-xl font-medium text-center animate-pulse">Loading trips...</p>
      ) : trips.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-600">{trip.name}</h3>
              <p className="text-lg font-medium">Duration: <span className="font-semibold">{trip.duration}</span></p>
              <p className="text-lg font-medium">Price: <span className="font-semibold">${trip.price}</span></p>
              <p className="text-md mt-2 font-semibold text-gray-700">Amenities:</p>
              <ul className="list-disc ml-5 text-gray-600 text-sm">
                {trip.amenities.map((amenity, i) => (
                  <li key={i} className="mt-1">{amenity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl font-medium bg-white text-red-500 px-6 py-3 rounded-lg shadow-lg">
          No trips available for {handle}.
        </p>
      )}

      {/* Talk to an Expert Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => router.push("/get-in-touch")}
          className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition font-bold text-lg"
        >
          Talk to an Expert
        </button>
      </div>
    </div>
  );
};

export default DestinationPage;
