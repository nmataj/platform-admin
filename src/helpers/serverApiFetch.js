
const headers = {
  'Content-Type': 'application/json',
};

export async function serverApiFetch(url = import.meta.env.VITE_URL, method = 'GET') {
  try {
    let response = await fetch(`${url}`, { method, headers });

    if (!response.ok) {
      throw new Error(`Failed to load data from ${url}.`);
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error(error);
  }
}
