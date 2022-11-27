import React, { useState } from 'react';
import '../app.css';

import axios from 'axios';

const ReviewForm = () => {
  const [movieName, setMovieName] = useState('');
  const [movieReview, setMovieReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (movieName == '' || movieReview == '') return;
    try {
      await axios.post('http://localhost:3001/addreview', {
        movieName: movieName,
        movieReview: movieReview,
      });
      setMovieName('');
      setMovieReview('');
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <form>
      <div>
        <input
          type="text"
          name="movieName"
          id="movieName"
          placeholder="Movie Name..."
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="movieReview"
          id="movieReview"
          placeholder="Movie Review..."
          value={movieReview}
          onChange={(e) => setMovieReview(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
