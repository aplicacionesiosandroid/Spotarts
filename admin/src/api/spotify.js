export const getSpotifyToken = async () => {
  try {
    const res = await fetch('http://192.168.0.10:5000/api/spotify/token');
    const data = await res.json();
    return data.access_token;
  } catch (error) {
    console.error('Error al obtener token de Spotify:', error);
    return null;
  }
};
