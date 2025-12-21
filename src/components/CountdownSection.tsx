import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CountdownSection = () => {
  const targetDate = new Date("2026-01-02T18:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "DNI", value: timeLeft.days, color: "neon-pink" },
    { label: "GODZIN", value: timeLeft.hours, color: "neon-cyan" },
    { label: "MINUT", value: timeLeft.minutes, color: "neon-yellow" },
    { label: "SEKUND", value: timeLeft.seconds, color: "neon-purple" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border-2 border-dashed border-muted-foreground rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-glow-pink text-primary">
            ODLICZANIE
          </h2>
          <p className="text-muted-foreground text-lg">Do rozpoczęcia imprezy pozostało:</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-3xl p-6 md:p-8 text-center relative overflow-hidden"
              >
                {/* Animated glow */}
                <motion.div
                  className={`absolute inset-0 bg-${unit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Number with flip animation */}
                <motion.div
                  key={unit.value}
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="perspective-1000"
                >
                  <span
                    className={`text-5xl md:text-7xl font-display font-black text-${unit.color}`}
                    style={{
                      textShadow: `0 0 20px hsl(var(--${unit.color}) / 0.8), 0 0 40px hsl(var(--${unit.color}) / 0.4)`,
                    }}
                  >
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                </motion.div>
                
                <p className="text-muted-foreground text-sm md:text-base uppercase tracking-widest mt-4">
                  {unit.label}
                </p>

                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-muted-foreground/30 rounded-tl" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-muted-foreground/30 rounded-tr" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-muted-foreground/30 rounded-bl" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-muted-foreground/30 rounded-br" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
