export interface Destination {
  title: string;
  img: string;
  handle: string;
}

export interface Trip {
  id: string;
  name: string;
  price: number;
  duration: string;
  amenities: string[];
}

export interface Banner {
  img: string;
  alt: string;
}
