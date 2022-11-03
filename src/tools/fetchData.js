import mockData from "./mockData.json";
export const API_URL = "https://toncenter.kdimentionaltree.com";
export const fetchData = async () => {
  const response = await fetch(`${API_URL}/api/dns/dhts`);
  const data = await response.json();
  return data;
};

export const fetchMockData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });
};
