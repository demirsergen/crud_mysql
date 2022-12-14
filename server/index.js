import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

const db = mysql.createConnection({
  host: process.env.VITE_HOST,
  user: process.env.VITE_USER,
  password: process.env.VITE_PASSWORD,
  database: process.env.VITE_DATABASE,
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  const q = 'SELECT * FROM first_database.movie_reviews';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete('/delete/:id', (req, res) => {
  const del = req.params.id;
  const q = `DELETE FROM first_database.movie_reviews WHERE id = ?`;
  db.query(q, [del], (err, data) => {
    if (err) return res.json(err);
    return res.json('deleted.');
  });
});

app.post('/addreview', (req, res) => {
  const values = [req.body.movieName, req.body.movieReview];
  const q =
    'INSERT INTO first_database.movie_reviews (movieName, movieReview) VALUES (?)';
  db.query(q, [values], (err, data) => {
    if (err) res.json(err);
    return res.json("You've Successfully added a review!");
  });
});

app.put('/update', (req, res) => {
  const name = req.body.movieName;
  const review = req.body.movieReview;
  const sqlUpdate =
    'UPDATE first_database.movie_reviews SET movieReview = ? WHERE movieName = ?';

  db.query(sqlUpdate, [review, name], (err, result) => {
    if (err) console.error(err);
  });
});

app.listen('3001', () => {
  console.log('server running!');
});
