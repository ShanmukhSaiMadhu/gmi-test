import React, {useState, useEffect} from 'react';
import './App.css';
import Player from './components/Player';
import Playlist from './components/Playlist';

function App() {
  const [list, setList] = useState([])
    const [data, setData] = useState(null)
    const [url, setUrl] = useState("www.youtube.com/rrr")
    const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch(`https://dry-refuge-78670.herokuapp.com/api/v1/video`)
    .then(res => res.json())
    .then((actualData) => {
        setData(actualData);
    })
    .catch((err) => {
        setData(null);
    })
    .finally(() => {
        setLoading(false);
    });
  }, []);
    
  return (
    <div className="App">
      <h1 style={{color: 'red'}}>Movie Player</h1>
      {
        loading ? <div>A moment please...</div>
        :
        <Playlist apiData={data} setUrl={setUrl} />
      }
      <Player url={url} />
    </div>
  );
}

export default App;
