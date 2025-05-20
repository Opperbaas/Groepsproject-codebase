const express = require('express');
const app = express();
app.use(express.static(__dirname)); // Of pad naar je frontend-map

// Maak node_modules toegankelijk:
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
