import './App.css';
import Cards from './components/Cards';
import img from './logo.svg';

export default function App() {
  const imageLink = img;
  const image = (
      <img src={imageLink} className="card-img-top" alt="some card pic" />
  );
  return (
      <div className="App">
        <Cards image={image}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">Go somewhere</button>
        </Cards>
        <Cards>
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <button className="btn btn-primary">Go somewhere else</button>
        </Cards>
      </div>
  );
}