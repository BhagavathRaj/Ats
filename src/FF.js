import React from 'react';
import './styles.css';

const phrases = [
  'Free demat and trading account',
  'Open an online trading and a demat account for free',
  'Open demat and trading account free',
  'Free demat and trading account online',
  'Free demat and trading account opening',
  'Free demat and trading account without AMC',
  'Free demat trading account',
  'Open free demat and trading account online',
  'Open free demat trading account',
  'Best sites for open free demat and trading account',
];

export default function App() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {phrases.map((phrase, index) => (
          <span key={index} className="marquee-item">
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
