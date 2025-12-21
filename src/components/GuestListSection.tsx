import { motion } from "framer-motion";
import { Users, UserPlus, Star, Crown } from "lucide-react";

const guests = [
  { name: "Bartosz Cieśla", status: "confirmed", special: true },
  { name: "Zuzanna Skalska", status: "confirmed", special: true },
  { name: "Seweryn Cieśla", status: "confirmed", special: false },
  { name: "Sylwia Wanat", status: "confirmed", special: false },
  { name: "Paweł Kisiel-dorohinicki", status: "confirmed", special: true },
  { name: "Dawid Rówiński", status: "confirmed", special: false },
  { name: "Weronika Sordyl", status: "confirmed", special: false },
  { name: "Bartosz Kwiatkowski", status: "confirmed", special: false },
  { name: "Agata Zwolak", status: "confirmed", special: false },
  { name: "Bartosz Wyciszkiewicz", status: "confirmed", special: false },
  { name: "Kasia Jarosz", status: "pending", special: false },
  { name: "Bronislava Cieciak", status: "pending", special: false },
  { name: "Stanislava Cieciak", status: "pending", special: false },
  { name: "Joanna Dubielewska", status: "pending", special: false },
  { name: "Gosia Kmon", status: "confirmed", special: false },
  { name: "Jakub Sroka", status: "confirmed", special: false },
  { name: "Krzysiek Górak", status: "confirmed", special: false },
  { name: "Ola Zielińska", status: "pending", special: false },
  { name: "Weronika Gołota", status: "pending", special: false },
  { name: "Eliza Wojnar", status: "pending", special: false },
  { name: "Maks Wojnar", status: "pending", special: false },
  { name: "Antoni Kułak", status: "pending", special: false },


];

const GuestListSection = () => {
  const confirmedCount = guests.filter(g => g.status === "confirmed").length;

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-6"
          >
            <Users className="w-5 h-5 text-neon-cyan" />
            <span className="text-muted-foreground">
              <span className="text-neon-cyan font-bold">{confirmedCount}</span> potwierdzonych
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-glow-cyan text-secondary">
            LISTA GOŚCI
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            (kolejność randomizowana i lista jeszcze będzie uzupełniana!)
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-pink opacity-5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan opacity-5 rounded-full blur-3xl" />

            <div className="grid gap-4">
              {guests.map((guest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    guest.status === "confirmed"
                      ? "bg-neon-green/10 border border-neon-green/30"
                      : "bg-muted/30 border border-muted"
                  }`}
                >
                  {/* Avatar placeholder */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      guest.status === "confirmed"
                        ? "bg-neon-green/20"
                        : "bg-muted"
                    }`}
                  >
                    {guest.special ? (
                      <Crown className="w-6 h-6 text-neon-yellow" />
                    ) : guest.status === "confirmed" ? (
                      <Star className="w-6 h-6 text-neon-green" />
                    ) : (
                      <UserPlus className="w-6 h-6 text-muted-foreground" />
                    )}
                  </motion.div>

                  {/* Name */}
                  <div className="flex-1">
                    <p className={`font-display font-semibold ${
                      guest.status === "confirmed"
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}>
                      {guest.name}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {guest.status === "confirmed" ? "Potwierdzone" : "Oczekuje"}
                    </p>
                  </div>

                  {/* Status indicator */}
                  <motion.div
                    animate={{ scale: guest.status === "confirmed" ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-3 h-3 rounded-full ${
                      guest.status === "confirmed"
                        ? "bg-neon-green shadow-[0_0_10px_hsl(var(--neon-green))]"
                        : "bg-muted-foreground"
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Add more hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <p className="text-muted-foreground text-sm italic">
                Lista będzie aktualizowana na bieżąco...
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestListSection;
