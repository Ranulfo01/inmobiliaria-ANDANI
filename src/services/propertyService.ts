import type { Property } from "../types/property";

export const getProperties = async (): Promise<Property[]> => {
  const res = await fetch("http://localhost:5000/api/properties");
  const data = await res.json();
  return data;
};