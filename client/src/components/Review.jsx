import React from 'react';

const Review = ({ review }) => {
  const deleteReview = () => {};
  return (
    <div className="review-container">
      <h3>{review.movieName}</h3>
      <p>{review.movieReview}</p>
      <button onClick={deleteReview}>Delete</button>
    </div>
  );
};

export default Review;
