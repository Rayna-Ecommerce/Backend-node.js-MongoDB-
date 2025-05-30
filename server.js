// Import library
const mongoose = require('mongoose');

// Connection String URI (ganti user, password, cluster, dbname sesuai Atlas lo)
const mongoURI = 'mongodb+srv:/P@sword0123:<P@sword0123>@cluster01.xsjzfbs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01';

// Connect ke MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('🔥 MongoDB connected!'))
.catch(err => console.log(err));

// Optional: setup Express server
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🔥 Backend Connected ke MongoDB!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});

