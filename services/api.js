import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    part: 'snippet,id',
    // regionCode: 'IN',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': 'd33DWSfDy1mshZUjaf4nMG4SPsJCp1SSRsUjsn6TXnxnNaO3Jq',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const getData = async (url) => {
  const { data: { items } } = await axios.get(`${BASE_URL}/${url}`, options);

  return items;
}