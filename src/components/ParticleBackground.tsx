import { motion } from "framer-motion";
import { useMemo } from "react";

const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      color: ["hsl(330, 100%, 60%)", "hsl(190, 100%, 50%)", "hsl(45, 100%, 60%)", "hsl(270, 100%, 65%)"][Math.floor(Math.random() * 4)],
    }));
  }, []);

  const confetti = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 5 + 5,
      color: ["hsl(330, 100%, 60%)", "hsl(190, 100%, 50%)", "hsl(45, 100%, 60%)", "hsl(270, 100%, 65%)", "hsl(150, 100%, 50%)"][Math.floor(Math.random() * 5)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Falling confetti */}
      {confetti.map((piece) => (
        <motion.div
          key={`confetti-${piece.id}`}
          className="absolute w-2 h-3 rounded-sm"
          style={{
            left: `${piece.x}%`,
            top: "-5%",
            backgroundColor: piece.color,
          }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, 720],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(330, 100%, 60%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [-50, 50, -50],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(190, 100%, 50%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [50, -50, 50],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
