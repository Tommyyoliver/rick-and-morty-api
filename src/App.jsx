import { useEffect, useState } from 'react';
import './App.css';
import logo from "./assets/logo.png";

function App() {
  
  const [accout, setAccout] = useState([]);
  const [personaje, setPersonaje] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const prev = () => {
    if(accout.prev){
      setUrl(accout.prev);
    }
  }

  const next = () => {
    if(accout.next){
      setUrl(accout.next);
    }
  }

  useEffect(()=>{
    async function API() {
      const api = await fetch(url);
      const data = await api.json();
      setAccout(data.info);
      setPersonaje(data.results);
    }

    API();

  },[url])
  
  return (
    <div className="App">
      <h1>The Rick and Morty API</h1>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
      {personaje.length === 19 ? (
        <div className="loader"></div>
      ) : (
      <div className='section'>
            {personaje.map(person => (
              <div key={person.id}>
                <img src={person.image} alt={person.name} />
                <h3>{person.name}</h3>
              </div>
            ))}
            <footer>
              <div>
                <a href="https://tommyyoliver.github.io/portfolio/" target="_blank">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <p>Tommy Oliver - 2023</p>
              <div className="footer-colors">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </footer>
      </div>
      )}
    </div>
  )
}

export default App
