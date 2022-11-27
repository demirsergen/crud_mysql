import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
  host: import.meta.env.VITE_HOST_NAME,
  user: import.meta.env.VITE_USER_NAME,
  password: import.meta.env.VITE_DB_PASSWORD,
  database: import.meta.env.VITE_DATABASE,
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

app.post('/addreview', (req, res) => {
  const values = [req.body.movieName, req.body.movieReview];
  console.log(req.body);
  const q =
    'INSERT INTO first_database.movie_reviews (movieName, movieReview) VALUES (?)';
  db.query(q, [values], (err, data) => {
    if (err) res.json(err);
    return res.json('dasdasd');
  });
});

app.listen('3001', () => {
  console.log('server running!');
});
