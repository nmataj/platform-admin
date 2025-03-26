
const headers = {
  'Content-Type': 'application/json',
};

export async function serverApiFetch(url = import.meta.env.VITE_URL, method = 'GET', query = '') {
  try {
    // await new Promise(resolve => setTimeout(resolve, 1500));
    const response = !await fetch(url, { method, headers });
    
    if (!response.ok) {
      throw new Error(response.message || 
                      `Failed to load data from ${url}.`);
    }

    const data = await response.json();
    const filteredData = filterDataByQuery(data, query);

    return filteredData;
  } catch (error) {
    throw new Error(`Error ${method.toLowerCase()}ing data from ${url}. ${error.message}.`);
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