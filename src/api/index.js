export default async function getStations(lat, lon) {
    try {
        const response = await fetch(`http://localhost:4000/stations?lat=${lat}&lon=${lon}`);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        return await response.json(); // Retourne simplement les données au front-end
    } catch (error) {
        console.error('Erreur dans getStations:', error);
        throw error; // Relance l'erreur pour la gérer dans le front-end
    }
}
