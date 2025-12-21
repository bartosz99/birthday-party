import { motion } from "framer-motion";
import { Heart, PartyPopper, Music, Sparkles } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Animated icons */}
          <div className="flex justify-center gap-6 mb-8">
            {[PartyPopper, Music, Sparkles, Heart].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -10, 0],
                  rotate: index % 2 === 0 ? [-5, 5, -5] : [5, -5, 5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                <Icon className={`w-8 h-8 ${
                  index === 0 ? "text-neon-pink" :
                  index === 1 ? "text-neon-cyan" :
                  index === 2 ? "text-neon-yellow" :
                  "text-neon-pink"
                }`} />
              </motion.div>
            ))}
          </div>

          {/* Main message */}
          <motion.h3
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            <span className="text-glow-pink text-primary">DO ZOBACZENIA!</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg mb-8"
          >
            Sprawmy sobie craftowego kaca 🎉
          </motion.p>

          {/* Date reminder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="inline-block"
          >
            <div className="glass rounded-2xl px-8 py-4 inline-flex items-center gap-4">
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Zapisz w kalendarzu</p>
                <p className="text-xl font-display font-bold text-secondary">2.01.2026 | 18:00</p>
              </div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-neon-yellow" />
              </motion.div>
            </div>
          </motion.div>

          {/* Copyright */}
          {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-muted-foreground text-sm flex items-center justify-center gap-2"
          >
            Stworzone z <Heart className="w-4 h-4 text-neon-pink animate-pulse" /> na tę wyjątkową okazję
          </motion.p> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
