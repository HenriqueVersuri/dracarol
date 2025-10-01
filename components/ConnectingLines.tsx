import React, { useState, useLayoutEffect } from 'react';

interface Line {
  id: string;
  d: string;
  length: number;
  delay: number;
}

interface ConnectingLinesProps {
  mainRef: React.RefObject<HTMLElement>;
  bubbleRefs: React.RefObject<Array<HTMLElement | null>>;
}

const ConnectingLines: React.FC<ConnectingLinesProps> = ({ mainRef, bubbleRefs }) => {
  const [lines, setLines] = useState<Line[]>([]);

  useLayoutEffect(() => {
    // requestAnimationFrame ensures we run this after the browser has painted,
    // avoiding layout shifts and ensuring elements are in their final positions.
    const animationFrameId = requestAnimationFrame(() => {
      const mainEl = mainRef.current;
      const bubbleEls = bubbleRefs.current;
      if (!mainEl || !bubbleEls?.length) return;

      const mainRect = mainEl.getBoundingClientRect();
      const mainCx = mainRect.left + mainRect.width / 2;
      const mainCy = mainRect.top + mainRect.height / 2;

      // FIX: The explicit generic on reduce was causing an error.
      // Switched to typing the accumulator in the callback to guide type inference.
      const newLines = bubbleEls.reduce((acc: Line[], bubbleEl, index) => {
        if (!bubbleEl) return acc;
        
        const bubbleRect = bubbleEl.getBoundingClientRect();
        const bubbleCx = bubbleRect.left + bubbleRect.width / 2;
        const bubbleCy = bubbleRect.top + bubbleRect.height / 2;

        const path = `M ${mainCx} ${mainCy} L ${bubbleCx} ${bubbleCy}`;
        const length = Math.sqrt(Math.pow(bubbleCx - mainCx, 2) + Math.pow(bubbleCy - mainCy, 2));

        acc.push({
          id: `line-${index}`,
          d: path,
          length,
          delay: index * 150 + 200, // Stagger with bubble animation
        });
        return acc;
      }, []);
      
      setLines(newLines);
    });

    const handleResize = () => {
        // Recalculate on resize
        requestAnimationFrame(() => {
             const mainEl = mainRef.current;
            const bubbleEls = bubbleRefs.current;
            if (!mainEl || !bubbleEls?.length) return;

            const mainRect = mainEl.getBoundingClientRect();
            const mainCx = mainRect.left + mainRect.width / 2;
            const mainCy = mainRect.top + mainRect.height / 2;
            
            // FIX: The explicit generic on reduce was causing an error.
            // Switched to typing the accumulator in the callback to guide type inference.
             const newLines = bubbleEls.reduce((acc: Line[], bubbleEl, index) => {
                if (!bubbleEl) return acc;
                const bubbleRect = bubbleEl.getBoundingClientRect();
                const bubbleCx = bubbleRect.left + bubbleRect.width / 2;
                const bubbleCy = bubbleRect.top + bubbleRect.height / 2;
                const path = `M ${mainCx} ${mainCy} L ${bubbleCx} ${bubbleCy}`;
                const length = Math.sqrt(Math.pow(bubbleCx - mainCx, 2) + Math.pow(bubbleCy - mainCy, 2));
                acc.push({ id: `line-${index}`, d: path, length, delay: index * 150 + 200 });
                return acc;
            }, []);
            setLines(newLines);
        });
    }

    window.addEventListener('resize', handleResize);
    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
    }
  }, [mainRef, bubbleRefs]);

  if (!lines.length) return null;

  return (
    <div className="absolute inset-0 z-5 pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0)" />
            <stop offset="50%" stopColor="rgba(236, 72, 153, 0.5)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
          </linearGradient>
           <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
              </feMerge>
          </filter>
        </defs>
        <g>
          {lines.map(line => (
            <path
              key={line.id}
              d={line.d}
              stroke="url(#line-gradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              className="connecting-line"
              style={{
                '--line-length': line.length,
                '--line-delay': `${line.delay}ms`,
              } as React.CSSProperties}
            />
          ))}
        </g>
      </svg>
      <style>{`
        .connecting-line {
          stroke-dasharray: var(--line-length);
          stroke-dashoffset: var(--line-length);
          animation: draw-line 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          animation-delay: var(--line-delay);
        }

        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ConnectingLines;