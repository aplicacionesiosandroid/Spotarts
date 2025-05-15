import { getSpotifyToken } from '../api/spotify';

useEffect(() => {
  const fetchToken = async () => {
    const token = await getSpotifyToken();
    console.log("Spotify Token:", token);
  };

  fetchToken();
}, []);
