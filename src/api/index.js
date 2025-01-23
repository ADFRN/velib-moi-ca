export default async function getStations(lat, lon) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(
      `${apiUrl}/stations?lat=${lat}&lon=${lon}`,
    );
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur dans getStations:', error);
    throw error;
  }
}
