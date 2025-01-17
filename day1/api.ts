export {};
import axios from "axios";

  
const getFact = async (url: string): Promise<void> => {
  try {
    const response = await axios.get(url);
    const data = response.data as { fact: string; length: number };
    console.log(data.fact);
  } catch (error) {
    console.error("Error fetching the API:", error);
  }
};

getFact("https://catfact.ninja/fact");
