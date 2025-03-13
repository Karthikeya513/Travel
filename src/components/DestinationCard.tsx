import { useRouter } from "next/router";
import Image from "next/image";

interface Destination {
  img?: string;
  title: string;
  handle: string;
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const router = useRouter();

  return (
    <div
      className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
      onClick={() => router.push(`/destination/${destination.handle}`)}
    >
      {/* Destination Image */}
      <Image
        src={destination.img || "/default-image.jpg"} // Fallback Image
        alt={destination.title || "Destination Image"}
        width={400}
        height={250}
        className="w-full object-cover"
        priority
      />

      {/* Destination Info */}
      <div className="p-4 text-center bg-white">
        <h3 className="text-lg font-bold text-gray-800">{destination.title}</h3>
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
