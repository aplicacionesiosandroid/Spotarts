const express = require('express');
const router = express.Router();
const axios = require('axios');

const clientId = '7e157bee8e464db294337a0608b9d0a3';
const clientSecret = '6ad2789a577845f2ac892b07a334e3cb';

router.get('/token', async (req, res) => {
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    res.json({ access_token: response.data.access_token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Spotify token' });
  }
});

module.exports = router;
