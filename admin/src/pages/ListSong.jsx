useEffect(() => {
  fetch('http://192.168.0.10:5000/api/songs')
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(song => song.createdByRole === 'admin');
      setSongs(filtered);
    });
}, []);
