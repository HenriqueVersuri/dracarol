
import React, { useEffect } from 'react';
import type { NodeData } from '../types';

interface ModalProps {
  node: NodeData | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ node, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!node) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 m-4 max-w-lg w-full relative transform transition-all duration-300 scale-95 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Fechar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-4 ${node.bgColor}`}>
            {node.icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{node.title}</h2>
        </div>
        <div className="text-base md:text-lg text-gray-300 leading-relaxed">
          {node.content}
        </div>
      </div>
       <style>{`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
          }
        `}</style>
    </div>
  );
};

export default Modal;
