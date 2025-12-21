import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Train, Bus } from "lucide-react";

const LocationSection = () => {
  // Placeholder address - zmień na właściwy adres
  const address = "ul. Przykładowa 123, 00-001 Warszawa";
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.888281980995!2d19.94045371197647!3d50.05092407139981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0aecebfd57%3A0x7a5970e24c4cd61c!2sBeerStreet!5e0!3m2!1spl!2spl!4v1766323715825!5m2!1spl!2spl";
  const googleMapsLink = "https://maps.app.goo.gl/7cf4QCYBijMegumn7";



  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-neon-pink animate-pulse" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              LOKALIZACJA
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Znajdź nas i dołącz do zabawy!
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 overflow-hidden">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Lokalizacja imprezy"
              />

              {/* Address overlay */}
              {/* <div className="p-6 border-t border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-pink/20 rounded-xl">
                    <MapPin className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      Adres imprezy
                    </h3>
                    <p className="text-muted-foreground mb-3">{address}</p>
                    <motion.a
                      href={googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-pink to-neon-cyan text-background font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-neon-pink/30 transition-shadow"
                    >
                      <Navigation className="w-4 h-4" />
                      Otwórz w Google Maps
                    </motion.a>
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Directions */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          > */}
            {/* <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Navigation className="w-6 h-6 text-neon-cyan" />
              Jak do nas dotrzeć?
            </h3> */}
{/*
            {directions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-card/60 backdrop-blur-xl rounded-xl border border-border/50 p-5 hover:border-neon-cyan/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 rounded-xl group-hover:from-neon-cyan/30 group-hover:to-neon-pink/30 transition-colors">
                        <item.icon className="w-6 h-6 text-neon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))} */}

            {/* Additional info card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-6 p-5 bg-gradient-to-br from-neon-yellow/10 to-neon-pink/10 rounded-xl border border-neon-yellow/30"
            >
              <p className="text-sm text-foreground/80">
                💡 <span className="font-semibold">Pro tip:</span> Jeśli jedziesz samochodem,
                polecam wyjazd wcześniej - w piątek korki mogą być spore!
              </p>
            </motion.div> */}
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
