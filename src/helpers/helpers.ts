import axios from "axios";
import { Property } from "../types/Property";

const API_BASE_URL = import.meta.env.VITE_FAKE_API;

export const getProperties = async (page: number): Promise<Property[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/properties?page=${page}&limit=12`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

export const getPropertyById = async (id: string): Promise<Property> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/properties/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching property with ID ${id}:`, error);
    throw error;
  }
};

export const createProperty = async (
  property: Partial<Property>
): Promise<Property> => {
  try {
    const defaultImageUrl = `https://dummyimage.com/800x600/cccccc/000000&text=${encodeURIComponent(
      property.title || "Property"
    )}`;
    const randomLat = (Math.random() * 180 - 90).toFixed(6);
    const randomLng = (Math.random() * 360 - 180).toFixed(6);
    const propertyWithDefaults = {
      ...property,
      owner: {
        name: "benjamin-francisco",
        contact: "bf@example.com",
        ...property.owner,
      },
      images:
        property.images && property.images.length > 0
          ? property.images
          : [defaultImageUrl],
      location: property.location || {
        lat: parseFloat(randomLat),
        lng: parseFloat(randomLng),
      },
    };
    const response = await axios.post(
      `${API_BASE_URL}/properties`,
      propertyWithDefaults
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Error creating property:",
      error?.response?.data || error.message
    );
    throw error;
  }
};

export const updateProperty = async (
  id: string,
  updates: Partial<Property>
): Promise<Property> => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/properties/${id}`,
      updates
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating property with ID ${id}:`, error);
    throw error;
  }
};

export const deleteProperty = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/properties/${id}`);
  } catch (error) {
    console.error(`Error deleting property with ID ${id}:`, error);
    throw error;
  }
};
