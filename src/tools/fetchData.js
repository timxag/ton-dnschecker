import mockData from "./mockData.json";
// export const fetchData = async (data) => {
//     try {
//       const response = await fetch(`/api/items?search=${data}`);
//       const data = await response.json();
//       return data;
//     } catch (e) {
//       throw new Error(`API error:${e?.message}`);
//     }
// };

export const fetchMockData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });
};
