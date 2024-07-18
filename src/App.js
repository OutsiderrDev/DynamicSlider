import React, { useState } from 'react';
import Slider from './Slider';
import './App.css';

function App() {
  const [numSlides, setNumSlides] = useState(3);
  const [fullWidth, setFullWidth] = useState(false);
  const [showArrows, setShowArrows] = useState(true);
  const [showDots, setShowDots] = useState(true);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [generate, setGenerate] = useState(false);

  const handleGenerateSlider = () => {
    setGenerate(true);
  };

  return (
    <div className="App">
      <h1>Dynamiczny Slider</h1>
      <div className="controls">
        <label>
          Ilość slajdów:
          <input
            type="number"
            value={numSlides}
            onChange={(e) => setNumSlides(e.target.value)}
            min="1"
          />
        </label>
        <label>
          Pełna szerokość:
          <input
            type="checkbox"
            checked={fullWidth}
            onChange={(e) => setFullWidth(e.target.checked)}
          />
        </label>
        <label>
          Pokaż kontrolki:
          <input
            type="checkbox"
            checked={showArrows}
            onChange={(e) => setShowArrows(e.target.checked)}
          />
        </label>
        <label>
          Pokaż wskaźnik położenia:
          <input
            type="checkbox"
            checked={showDots}
            onChange={(e) => setShowDots(e.target.checked)}
          />
        </label>
        <label>
          Pokaż miniaturki:
          <input
            type="checkbox"
            checked={showThumbnails}
            onChange={(e) => setShowThumbnails(e.target.checked)}
          />
        </label>
        <button onClick={handleGenerateSlider} className='btn'>Wygeneruj slider</button>
      </div>
      {generate && (
        <Slider
          numSlides={numSlides}
          fullWidth={fullWidth}
          showArrows={showArrows}
          showDots={showDots}
          showThumbnails={showThumbnails}
        />
      )}
    </div>
  );
}

export default App;
