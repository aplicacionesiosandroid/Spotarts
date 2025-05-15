import express from 'express';
import axios from 'axios';

const router = express.Router();

const clientId = '7e157bee8e464db294337a0608b9d0a3';
const clientSecret = '6ad2789a577845f2ac892b07a334e3cb';

router.get('/token', async (req, res) => {
  const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({ grant_type: 'client_credentials' }),
      {
        headers: {
          Authorization: `Basic ${authString}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener token de Spotify:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error al obtener el token' });
  }
});

export default router;
