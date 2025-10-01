import React from 'react';

const OrientationLock: React.FC = () => {
  return (
    <>
      <div id="orientation-lock" className="fixed inset-0 bg-slate-900 z-[100] flex-col items-center justify-center text-white text-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mb-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9.126A9.013 9.013 0 0012 5a9.013 9.013 0 00-8.488 4.126M3.512 14.874A9.013 9.013 0 0012 19a9.013 9.013 0 008.488-4.126" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 9l3-3-3-3M6 15l-3 3 3 3" />
        </svg>
        <h2 className="text-2xl font-bold mb-2">Por favor, rotacione o seu dispositivo</h2>
        <p>Para uma melhor experiência, vire o seu celular para o modo paisagem.</p>
      </div>
      <style>{`
        #orientation-lock {
          display: none;
        }
        @media screen and (max-width: 1023px) and (orientation: portrait) {
          #orientation-lock {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default OrientationLock;
