export const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return await response.json();
  };
  