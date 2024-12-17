import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Memory } from '../types/memory';

interface MemoryCardProps {
  memory: Memory;
  onClose: () => void;
}

const MemoryCard = ({ memory, onClose }: MemoryCardProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="memory-card" onClick={onClose}>
      <div
        className="relative max-w-4xl w-full mx-4 rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {memory.mediaType === 'video' ? (
          <video
            src={memory.media}
            controls
            autoPlay
            className="w-full h-[80vh] object-cover"
          />
        ) : (
          <img
            src={memory.media}
            alt={memory.caption}
            className="w-full h-[80vh] object-cover"
          />
        )}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <p className="text-white text-xl font-playfair">{memory.caption}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
        >
          <X size={24} />
        </button>
        <audio ref={audioRef} src={memory.song} loop />
      </div>
    </div>
  );
};

export default MemoryCard;