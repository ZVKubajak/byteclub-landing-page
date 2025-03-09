import axios from "axios";

export const getSubscriber = async (email: string) => {
  try {
    const response = await axios.get(`/api/subscribe/${email}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const subscribe = async (name: string, email: string) => {
  try {
    const response = await axios.post("/api/subscribe/", {
      name,
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
