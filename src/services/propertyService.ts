import type { Property } from "../types/property";

const API = import.meta.env.VITE_API_URL;

export const getProperties = async (): Promise<Property[]> => {
  const res = await fetch(`${API}/properties`);
  const data = await res.json();
  return data;
};