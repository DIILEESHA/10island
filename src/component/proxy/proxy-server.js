const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/video', async (req, res) => {
  try {
    const response = await fetch('https://cdn.sanity.io/files/f3tpxs09/production/f7c533514e697633ae912646f5b296ee600340a9.mp4');
    const videoBuffer = await response.buffer();
    res.setHeader('Content-Type', 'video/mp4');
    res.send(videoBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
