import { useState } from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <h1>Crud App</h1>
      <ReviewForm />
      <Reviews />
    </div>
  );
}

export default App;
