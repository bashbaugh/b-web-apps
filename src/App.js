import React, { createRef, useEffect } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min'
import FOG from 'vanta/dist/vanta.fog.min'
import HALO from 'vanta/dist/vanta.halo.min'
import './App.css';
import AppCard from './AppCard'

function App() {
  const myApps = [
    {
      name: 'Simply Synonyms',
      url: 'https://synonyms.bweb.app/',
      description: 'The Chrome extension for a better vocabulary'
    },
    {
      name: 'App 2 app',
      url: 'https://google.com',
      description: 'A very nice App'
    }
  ]

  const bgRef = createRef()

  function getRandomColor() {
    var letters = '0123456789'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
  }

  useEffect(() => {
    WAVES({
      el: bgRef.current,
      color: getRandomColor()
    })
  }, [])

  return (
    <div className="App">
      <div className="App-content" ref={bgRef}>
        <div className="apps">
          {myApps.map((a) => (
            <AppCard
              name={a.name}
              url={a.url}
              description={a.description}
            />
          ))}
        </div>
        <p className="description">
          <i>
            Apps and software made by <a href="https://benjaminashbaugh.me/">Benjamin Ashbaugh</a>. Questions? <a href="https://benjaminashbaugh.me/#contact">Contact me.</a>
          </i>
        </p>
      </div>
    </div>
  );
}

export default App;
