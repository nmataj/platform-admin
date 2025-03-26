
const headers = {
  'Content-Type': 'application/json',
};

export async function serverApiFetch(url = import.meta.env.VITE_URL, method = 'GET', query = '') {
  try {
    // await new Promise(resolve => setTimeout(resolve, 1500));
    const response = await fetch(url, { method, headers });

    if (!response.ok) {
      throw new Error(`Failed to load data from ${url}.`);
    }

    const data = await response.json();
    const filteredData = filterDataByQuery(data, query);

    return filteredData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error(error);
  }
}

function filterDataByQuery(data, query) {
  if (!query) return data;

  const lowerQuery = query.toLowerCase();

  return data.filter(item => Object.values(item)
                                   .some(value => String(value)
                                   .toLowerCase()
                                   .includes(lowerQuery)));
}