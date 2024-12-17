import { memories } from '../data/memories';
import MemoryPoint from '../components/MemoryPoint';

const Index = () => {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gradient-to-br from-[#1a331a] to-[#0a1f0a]">
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#E6B800] font-playfair">
          Road To Dallas
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#C4A000] font-playfair">
          A DANIEL RICHARDSON BIRTHDAY
        </h2>
      </div>
      
      <div className="relative w-full max-w-4xl aspect-[3/2] rounded-lg bg-[#1a331a]/80 backdrop-blur-sm border border-[#E6B800]/20 shadow-xl">
        {/* Decorative road path */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-1 bg-[#E6B800]/30 transform -rotate-6"></div>
        </div>
        
        {memories.map((memory, index) => (
          <MemoryPoint
            key={memory.id}
            memory={memory}
            isFirst={index === 0}
            previousPosition={index > 0 ? memories[index - 1].position : undefined}
          />
        ))}
      </div>
      
      <p className="mt-8 text-center text-[#C4A000] max-w-md animate-fade-in">
        Click on the points to relive our journey to Dallas ✨
      </p>
    </div>
  );
};

export default Index;