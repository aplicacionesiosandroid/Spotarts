import React, { useEffect, useState } from 'react'; import { getSpotifyToken } from '../api/spotify'; import { useNavigate } from 'react-router-dom';

const Dashboard = () => { const [stats, setStats] = useState({ users: 0, albums: 0, songs: 0 }); const navigate = useNavigate();

useEffect(() => { const fetchToken = async () => { try { const token = await getSpotifyToken(); console.log("Spotify Token:", token); } catch (error) { console.error("Error al obtener el token de Spotify:", error); } };

const fetchStats = async () => {
  try {
    const resUsers = await fetch('http://192.168.0.10:5000/api/users');
    const usersData = await resUsers.json();

    const resAlbums = await fetch('http://192.168.0.10:5000/api/albums');
    const albumsData = await resAlbums.json();

    const resSongs = await fetch('http://192.168.0.10:5000/api/songs');
    const songsData = await resSongs.json();

    setStats({
      users: usersData.length,
      albums: albumsData.length,
      songs: songsData.length,
    });
  } catch (error) {
    console.error("Error al obtener estadísticas:", error);
  }
};

fetchToken();
fetchStats();

}, []);

return ( <div className="p-4"> <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1> <p className="text-gray-600 mb-6">Bienvenido al panel de Spotarts</p> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <div className="bg-white rounded-xl shadow p-4 cursor-pointer" onClick={() => navigate('/users')}> <h2 className="text-lg font-semibold">Usuarios</h2> <p className="text-2xl">{stats.users}</p> </div> <div className="bg-white rounded-xl shadow p-4 cursor-pointer" onClick={() => navigate('/albums')}> <h2 className="text-lg font-semibold">Álbumes</h2> <p className="text-2xl">{stats.albums}</p> </div> <div className="bg-white rounded-xl shadow p-4 cursor-pointer" onClick={() => navigate('/songs')}> <h2 className="text-lg font-semibold">Canciones</h2> <p className="text-2xl">{stats.songs}</p> </div> </div> </div> ); };

export default Dashboard;


