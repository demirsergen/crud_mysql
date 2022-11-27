import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Review from './Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const response = await axios.get('http://localhost:3001/');
      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div className="w-1/2 mx-auto flex flex-col items-center">
      {reviews?.map((review) => {
        return <Review key={review.id} review={review} />;
      })}
    </div>
  );
};

export default Reviews;
