import React, { useState, useRef } from 'react';
import Modal from './components/Modal';
import ThoughtBubble from './components/ThoughtBubble';
import type { NodeData } from './types';
import { FocusIcon, HeartIcon, IdeaStormIcon, OrganizerIcon, SensoryIcon, CalmIcon, CommunicationIcon, GrowthIcon, GratitudeIcon } from './components/Icons';
import StarryBackground from './components/StarryBackground';
import ConnectingLines from './components/ConnectingLines';
import OrientationLock from './components/OrientationLock';

const nodes: NodeData[] = [
  {
    id: 'focus',
    title: 'Zona de Foco',
    content: <p>Você me mostrou que o hiperfoco não era um problema, mas uma característica poderosa. Com sua ajuda, aprendi a canalizá-lo como um superpoder, transformando minha maneira de ver o mundo. Gratidão por me ajudar a entender como minha mente funciona.</p>,
    position: { top: '15%', left: '10%' },
    bgColor: 'bg-blue-500/50',
    icon: <FocusIcon />,
  },
  {
    id: 'idea-storm',
    title: 'Tempestade de Ideias',
    content: <p>Minha mente era uma tempestade de ideias que eu não entendia. Você não tentou parar a chuva, mas me deu um mapa, me mostrando que eu podia navegar e até dançar nela. Gratidão por me ensinar a ver a beleza no meu caos criativo.</p>,
    position: { top: '20%', right: '12%' },
    bgColor: 'bg-purple-500/50',
    icon: <IdeaStormIcon />,
  },
  {
    id: 'sensory',
    title: 'Mundo Sensorial',
    content: <p>As cores, sons e texturas do mundo me sobrecarregavam. Você me ajudou a entender que minha sensibilidade não é uma fraqueza, mas uma forma única de perceber a realidade. Gratidão por me mostrar como encontrar harmonia nos detalhes.</p>,
    position: { bottom: '20%', left: '15%' },
    bgColor: 'bg-teal-500/50',
    icon: <SensoryIcon />,
  },
  {
    id: 'organizer',
    title: 'O Organizador',
    content: <p>Meus pensamentos pareciam um quebra-cabeça impossível. Ao me ajudar a entender o TDAH, você me entregou a 'caixa' com a imagem de referência, me dando a clareza para começar a montar minha própria ordem. Gratidão.</p>,
    position: { bottom: '15%', right: '18%' },
    bgColor: 'bg-amber-500/50',
    icon: <OrganizerIcon />,
  },
  {
    id: 'calm',
    title: 'Encontrando a Calma',
    content: <p>Entre o caos de pensamentos e sentimentos, você me mostrou como encontrar ilhas de calma. Aprendi a respirar e a entender que a tranquilidade também mora dentro de mim. Gratidão por me ensinar a ancorar.</p>,
    position: { top: '50%', left: '5%' },
    bgColor: 'bg-green-500/50',
    icon: <CalmIcon />,
  },
  {
    id: 'communication',
    title: 'Decifrando a Comunicação',
    content: <p>Eu achava que falava uma língua diferente. Você me mostrou que minha forma de comunicar não era errada, apenas única. Com sua orientação, aprendi a construir pontes, em vez de muros. Gratidão por validar minha voz.</p>,
    position: { top: '55%', right: '5%' },
    bgColor: 'bg-sky-500/50',
    icon: <CommunicationIcon />,
  },
  {
    id: 'growth',
    title: 'Jornada de Descoberta',
    content: <p>Antes do diagnóstico, eu me sentia perdido. Cada sessão foi como acender uma luz em um cômodo da minha mente. Não se trata de 'melhorar', mas de me conhecer. Gratidão por ser a guia nesta jornada de autodescoberta.</p>,
    position: { bottom: '5%', left: '45%' },
    bgColor: 'bg-orange-500/50',
    icon: <GrowthIcon />,
  },
  {
    id: 'gratitude-share',
    title: 'Gratidão Compartilhada',
    content: <p>Gratidão por compartilhar sua história e me motivar a construir a minha. Felicidades em sua profissão e no relacionamento.</p>,
    position: { top: '32%', left: '58%' },
    bgColor: 'bg-rose-500/50',
    icon: <GratitudeIcon />,
  },
];

const mainMessageNode: NodeData = {
  id: 'main',
  title: 'Gratidão, Dra. Carol',
  content: <p>Gratidão por me dar as ferramentas para navegar na bela e caótica sinfonia da minha mente. Com sua ajuda, estou aprendendo a ser o maestro.</p>,
  position: {},
  bgColor: 'bg-pink-500/50',
  icon: <HeartIcon />,
};

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const mainButtonRef = useRef<HTMLButtonElement>(null);
  const bubbleRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleNodeClick = (node: NodeData) => {
    setSelectedNode(node);
    setActiveNodeId(node.id);
  };

  const handleCloseModal = () => {
    setSelectedNode(null);
    setActiveNodeId(null);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white flex items-center justify-center font-sans">
      <OrientationLock />
      <StarryBackground />
      <ConnectingLines mainRef={mainButtonRef} bubbleRefs={bubbleRefs} />

      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-extralight tracking-wider mb-4 text-gray-300">
          Uma Viagem pela Minha Mente
        </h1>
        <button
          ref={mainButtonRef}
          onClick={() => handleNodeClick(mainMessageNode)}
          className={`group relative flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 ${activeNodeId && activeNodeId !== 'main' ? 'animate-pulse-link' : ''}`}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-pink-500/30 flex items-center justify-center animate-pulse-main cursor-pointer shadow-2xl backdrop-blur-md">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-pink-500/50 flex items-center justify-center">
              <HeartIcon />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg md:text-xl font-semibold text-pink-300 tracking-wide">Gratidão, Dra. Carol</p>
            <p className="text-base md:text-lg font-light text-gray-300 mt-1">- Henrique Versuri</p>
          </div>
          <span className="text-xs md:text-sm text-gray-400 mt-2">(clique em mim)</span>
        </button>
      </div>

      {nodes.map((node, index) => (
        <ThoughtBubble
          ref={(el) => (bubbleRefs.current[index] = el)}
          key={node.id}
          node={node}
          onClick={handleNodeClick}
          index={index}
          isActive={activeNodeId === node.id}
        />
      ))}

      <Modal node={selectedNode} onClose={handleCloseModal} />
      <style>{`
          @keyframes pulse-main {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.3);
            }
            50% {
              transform: scale(1.02);
              box-shadow: 0 0 40px 20px rgba(236, 72, 153, 0);
            }
          }
          .animate-pulse-main {
            animation: pulse-main 4s infinite;
          }

          @keyframes pulse-link {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-pulse-link {
              animation: pulse-link 0.5s ease-in-out;
          }
        `}</style>
    </main>
  );
};

export default App;