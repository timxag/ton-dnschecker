export const API_URL = "https://toncenter.kdimentionaltree.com";
export const fetchDHTData = async () => {
  const response = await fetch(`${API_URL}/api/dns/dhts`);
  const data = await response.json();
  return data;
};
export const fetchDHTResolved = async (value) => {
  const response = await fetch(`${API_URL}/api/dns/resolve?adnl=${value}`);
  const data = await response.json();
  return data;
};
export const fetchLSData = async () => {
  const response = await fetch(`${API_URL}/api/dns/liteservers`);
  const data = await response.json();
  return data;
};
export const fetchLSResolved = async (value) => {
  const response = await fetch(`${API_URL}/api/dns/ls_resolve?domain=${value}`);
  const data = await response.json();
  return data;
};
