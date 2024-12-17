import { useState } from 'react';
import { Memory } from '../types/memory';
import MemoryCard from './MemoryCard';

interface MemoryPointProps {
  memory: Memory;
  isFirst: boolean;
  previousPosition?: { x: number; y: number };
}

const MemoryPoint = ({ memory, isFirst, previousPosition }: MemoryPointProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderLine = () => {
    if (isFirst || !previousPosition) return null;

    const deltaX = memory.position.x - previousPosition.x;
    const deltaY = memory.position.y - previousPosition.y;
    const length = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    return (
      <div
        className="memory-line"
        style={{
          width: `${length}%`,
          transform: `rotate(${angle}deg)`,
          left: `${previousPosition.x}%`,
          top: `${previousPosition.y}%`
        }}
      />
    );
  };

  return (
    <>
      {renderLine()}
      <div
        className="memory-point absolute"
        style={{
          left: `${memory.position.x}%`,
          top: `${memory.position.y}%`
        }}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && <MemoryCard memory={memory} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default MemoryPoint;