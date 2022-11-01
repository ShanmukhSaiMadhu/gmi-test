import React,{useRef, useState} from 'react'
import './styles.css'

function Playlist({apiData, setUrl}) {

    const handleClick = (e) => {
      setUrl(e.target.alt)
    }

  return (
    <>
      <div className='playlist-card'>
          <h1>Playlists</h1>
          <ul className='playlist-wrapper'>
            {apiData &&
              apiData.map(({ id, name, poster, trailer, year }) => (
                <li key={id} className='playlist-li' onClick={handleClick} >
                  <img src={poster} className='playlist-img' alt={trailer} />
                  <h3 className='playlist-name'>{name.toUpperCase()} <br /> ({year})</h3>\
                </li>
              ))
            }
          </ul>
      </div>
    </>
  )
}

export default Playlist