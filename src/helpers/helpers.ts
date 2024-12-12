import axios from "axios";
import { Property } from "../types/Property";

const API_BASE_URL = "/api";

export const getProperties = async (): Promise<Property[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/properties?page=1&limit=12`
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
    const response = await axios.post(`${API_BASE_URL}/properties`, property);
    return response.data;
  } catch (error) {
    console.error("Error creating property:", error);
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
