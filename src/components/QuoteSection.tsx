import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import rickyImage from "./assets/ricky.png";

const QuoteSection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <Quote className="w-8 h-8 text-neon-yellow" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Party Plan
            </h2>
          </div>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Krótko i w punkt.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative group max-w-6xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500" />

          <div className="relative glass rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/90">
                  <span className="text-neon-cyan text-glow-cyan font-display font-bold">
                    That&apos;s Christmas.
                  </span>{" "}
                  None of this presents, lights, stress, and shit. Just get drunk and stoned with
                  your friends, family, and people that you love.
                </blockquote>
                <p className="mt-6 text-sm text-muted-foreground uppercase tracking-widest">
                  Ricky from Trailer Park Boys
                </p>
              </div>

              <div className="md:col-span-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow/20 via-transparent to-neon-pink/20 pointer-events-none" />
                <img
                  src={rickyImage}
                  alt="Ricky from Trailer Park Boys"
                  className="w-full h-64 md:h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;


