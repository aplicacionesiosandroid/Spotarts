import React, { useEffect } from 'react';
import { getSpotifyToken } from '../api/spotify';

const Dashboard = () => {
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getSpotifyToken();
        console.log("Spotify Token:", token);
      } catch (error) {
        console.error("Error al obtener el token de Spotify:", error);
      }
    };

    fetchToken();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <p className="text-gray-700">Bienvenido al panel de control de Spotarts.</p>
    </div>
  );
};

export default Dashboard;
