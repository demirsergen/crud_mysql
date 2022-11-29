import React, { useState } from 'react';
import axios from 'axios';

const Review = ({ review }) => {
  const [newReview, setNewReview] = useState('');
  const deleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const editReview = (moviename) => {
    try {
      axios.put(`http://localhost:3001/update`, {
        movieName: moviename,
        movieReview: newReview,
      });
      setNewReview('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-red-400 p-4 rounded my-2">
      <h3>Name: {review?.movieName}</h3>
      <p>Review: {review?.movieReview}</p>
      <div className="flex">
        <button
          onClick={() => deleteReview(review.id)}
          className="p-1 bg-red-900 text-white rounded block mx-auto"
        >
          Delete
        </button>
        <input
          type="text"
          name="newReview"
          id="newReview"
          onChange={(e) => setNewReview(e.target.value)}
          value={newReview}
        />
        <button
          onClick={() => editReview(review?.movieName)}
          className="p-1 bg-green-900 text-white rounded block mx-auto"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Review;
