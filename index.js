const express = require('express');
const app = express();
const port = 3000;


app.get('/api/movies', (req, res) => {
    res.send("Récupération de tous les films");
  });

 app.get('/api/movies/:id', (req, res) => {
    const id = req.params.id;
    res.json({ id : + id, name :'' });
 });

 app.get('/api/employee', (req, res) => {
  const name = req.query.name;
  res.status(404).send(`Impossible de récupérer l'employé ${req.query.name}`);
});

app.get('/api/employee/', (req, res) => {
  res.sendStatus(304);
});




app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
