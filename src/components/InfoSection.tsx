import { motion } from "framer-motion";
import { Calendar, Clock, Shirt, Beer, Pizza, Target } from "lucide-react";

const infoCards = [
  {
    icon: Calendar,
    title: "Data",
    value: "2 Stycznia 2026",
    subtitle: "Piątek",
    color: "neon-pink",
    glowClass: "text-glow-pink",
  },
  {
    icon: Clock,
    title: "Godzina",
    value: "18:00",
    subtitle: "Bądź punktualnie!",
    color: "neon-cyan",
    glowClass: "text-glow-cyan",
  },
  {
    icon: Shirt,
    title: "Dress Code",
    value: "Casual",
    subtitle: "Luźno i wygodnie",
    color: "neon-yellow",
    glowClass: "text-glow-yellow",
  },
];

const amenities = [
  { icon: Beer, label: "Piwo", description: "Do kupienia na miejscu" },
  { icon: Pizza, label: "Pizza", description: "Zamówimy razem" },
  { icon: Target, label: "Dart", description: "Turniej w planach!" },
];

const InfoSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-glow-cyan text-secondary">
            SZCZEGÓŁY IMPREZY
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow mx-auto rounded-full" />
        </motion.div>

        {/* Main info cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-8 text-center relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, hsl(var(--${card.color})) 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 inline-block"
                >
                  <div className={`w-20 h-20 rounded-2xl glass flex items-center justify-center mx-auto`}>
                    <card.icon className={`w-10 h-10 text-${card.color}`} />
                  </div>
                </motion.div>

                {/* Content */}
                <p className="text-muted-foreground uppercase tracking-widest text-sm mb-2">
                  {card.title}
                </p>
                <h3 className={`text-3xl md:text-4xl font-display font-bold ${card.glowClass} text-${card.color} mb-2`}>
                  {card.value}
                </h3>
                <p className="text-muted-foreground">{card.subtitle}</p>

                {/* Corner decorations */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-${card.color} opacity-10 blur-2xl`} />
                <div className={`absolute bottom-0 left-0 w-20 h-20 bg-${card.color} opacity-10 blur-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12 text-glow-yellow text-accent">
            CO NAS CZEKA?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 rounded-full glass mx-auto mb-4 flex items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <item.icon className="w-12 h-12 text-foreground relative z-10" />
                </motion.div>
                <h4 className="text-xl font-display font-bold mb-1">{item.label}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
