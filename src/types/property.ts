export interface Property {
  _id: string;
  title: string;
  price: number;
  location: string;
  images: string[];
  status: string;
  rooms: number;
  bathrooms: number;
  m2const: number;
  m2terr?: number;
  parking: number;
  description?: string;
}