const express = require('express');
const cors = require('cors');
const accountRouter = require('./routes/items');

const PORT = 7000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => res.send("Hellow World!"));
app.use('/api', accountRouter);

// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     return next(err);
//   }

//   console.error(err);
//   return res.status(res.statusCode || 500).send({ message: err.message });
// });

app.listen(PORT)
app.on('listening', () => {
    console.log(`Blockchain API server is listening ${PORT}`);
});
