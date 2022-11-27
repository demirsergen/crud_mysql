import React from 'react';
import axios from 'axios';

const Review = ({ review }) => {
  const deleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-red-400 p-2">
      <h3>Movie Name:{review?.movieName}</h3>
      <p>Review{review?.movieReview}</p>
      <button onClick={() => deleteReview(review.id)}>Delete</button>
    </div>
  );
};

export default Review;
