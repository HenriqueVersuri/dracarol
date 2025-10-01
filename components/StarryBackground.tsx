import React, { useMemo } from 'react';

const StarryBackground: React.FC = () => {
  const stars = useMemo(() => {
    const numStars = 250;
    const starElements = [];
    for (let i = 0; i < numStars; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        '--drift-x': `${Math.random() * 20 - 10}px`,
        '--drift-y': `${Math.random() * 20 - 10}px`,
        '--max-opacity': `${Math.random() * 0.7 + 0.3}`, // Intensidade máxima aleatória
        animationDelay: `${Math.random() * 8}s, ${Math.random() * 10}s`,
        animationDuration: `${Math.random() * 5 + 5}s, ${Math.random() * 20 + 15}s`,
      };
      starElements.push(<div key={`star-${i}`} className="star" style={style as React.CSSProperties} />);
    }
    return starElements;
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none universe-container">
      {stars}
      <style>{`
        .universe-container {
          animation: universe-motion 240s linear infinite alternate;
        }

        .star {
          position: absolute;
          background-color: #FFFFFF;
          border-radius: 50%;
          opacity: 0;
          box-shadow: 0 0 4px #FFFFFF, 0 0 8px #FFFFFF;
          animation-name: twinkle, drift;
          animation-timing-function: linear, ease-in-out;
          animation-iteration-count: infinite, infinite;
          animation-direction: normal, alternate;
        }

        @keyframes twinkle {
          0% { opacity: 0; }
          20% { opacity: calc(var(--max-opacity) * 0.7); }
          40% { opacity: calc(var(--max-opacity) * 0.2); }
          60% { opacity: var(--max-opacity); }
          80% { opacity: calc(var(--max-opacity) * 0.5); }
          100% { opacity: 0; }
        }
        
        @keyframes drift {
            from {
                transform: translate(0, 0);
            }
            to {
                transform: translate(var(--drift-x), var(--drift-y));
            }
        }

        @keyframes universe-motion {
            from {
                transform: scale(1) rotate(0deg);
            }
            to {
                transform: scale(1.15) rotate(-5deg);
            }
        }
      `}</style>
    </div>
  );
};

export default StarryBackground;