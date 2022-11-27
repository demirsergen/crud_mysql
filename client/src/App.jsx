import './App.css';
import ReviewForm from './components/ReviewForm';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="bg-red-100 p-2">
      <h1>Crud App</h1>
      <ReviewForm />
      <Reviews />
    </div>
  );
}

export default App;
