const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dynamic PORT provided by the cloud provider, fallback to 5000 locally
const PORT = process.env.PORT || 5000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'live', message: 'Backend is running on the cloud!' });
});

app.get('/', (req, res) => {
  res.send('Server is alive and running on the cloud!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});