const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (songs) from the "songs" folder
app.use('/songs', express.static(path.join(__dirname, 'songs')));

// Example route to return a list of songs
app.get('/api/songs', (req, res) => {
  const songs = [
    { id: 1, title: "Song A", artist: "Artist A", url: "/songs/songA.mp3" },
    { id: 2, title: "Song B", artist: "Artist B", url: "/songs/songB.mp3" }
  ];
  res.json(songs);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
