import { motion } from "framer-motion";
import { PartyPopper, Sparkles } from "lucide-react";

const HeroSection = () => {
  const titleLetters = "URODZINY".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Decorative icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 mb-8"
        >
          <motion.div
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PartyPopper className="w-12 h-12 text-neon-pink" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Sparkles className="w-12 h-12 text-neon-yellow" />
          </motion.div>
          <motion.div
            animate={{ rotate: [10, -10, 10] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PartyPopper className="w-12 h-12 text-neon-cyan" />
          </motion.div>
        </motion.div>

        {/* Main title with letter animation */}
        <div className="mb-6 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground uppercase tracking-[0.3em] font-body mb-4"
          >
            Zapraszam na moje
          </motion.p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-wider flex justify-center">
            {titleLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="inline-block text-glow-pink text-primary"
                style={{
                  textShadow: `
                    0 0 10px hsl(330 100% 60%),
                    0 0 20px hsl(330 100% 60%),
                    0 0 40px hsl(330 100% 60% / 0.5),
                    0 0 80px hsl(330 100% 60% / 0.3)
                  `,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-block glass rounded-2xl px-8 py-4 neon-border">
            <p className="text-2xl md:text-4xl font-display font-bold text-secondary text-glow-cyan">
              2 STYCZNIA 2026
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm uppercase tracking-widest">Przewiń w dół</span>
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
