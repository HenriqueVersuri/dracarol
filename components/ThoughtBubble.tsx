import React, { forwardRef } from 'react';
import type { NodeData } from '../types';

interface ThoughtBubbleProps {
  node: NodeData;
  onClick: (node: NodeData) => void;
  index: number;
  isActive: boolean;
  positionStyle?: React.CSSProperties;
}

const ThoughtBubble: React.FC<ThoughtBubbleProps> = forwardRef<HTMLButtonElement, ThoughtBubbleProps>(({ node, onClick, index, isActive, positionStyle }, ref) => {
  return (
    <button
      ref={ref}
      onClick={() => onClick(node)}
      className={`absolute transform transition-all duration-300 ease-in-out hover:scale-110 focus:scale-110 outline-none group animate-appear z-10 ${isActive ? 'animate-selected' : ''}`}
      style={{
        ...(positionStyle ?? node.position),
        animationDelay: `${index * 150}ms`,
      }}
      aria-label={`Abrir informação sobre ${node.title}`}
    >
      <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center cursor-pointer shadow-lg animate-pulse-slow ${node.bgColor}`}>
        <div className="w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-opacity-50 backdrop-blur-sm group-hover:bg-opacity-70 transition-all duration-300">
          {node.icon}
        </div>
      </div>
      <span className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {node.title}
      </span>
      <style>{`
        @keyframes appear {
          from {
            opacity: 0;
            transform: scale(0.7) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-appear {
          opacity: 0;
          animation: appear 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s infinite;
        }

        @keyframes selected-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        .animate-selected {
          animation: selected-pulse 0.5s ease-in-out;
        }
      `}</style>
    </button>
  );
});

export default ThoughtBubble;