import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import localizationVideo from "./assets/localization.mp4";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Lazy load: only load video when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={containerRef} className="relative py-20 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Video className="w-8 h-8 text-neon-cyan animate-pulse" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              NASZ STOLIK
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tak wygląda nasze miejsce na imprezę!
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

          <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 overflow-hidden">
            {isInView ? (
              <div className="relative">
                <video
                  ref={videoRef}
                  src={localizationVideo}
                  className="w-full aspect-video object-cover"
                  preload="metadata"
                  playsInline
                  loop
                  muted
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Play/Pause overlay */}
                <motion.button
                  onClick={handlePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
                    isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                  }`}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Play
                      className={`w-10 h-10 text-white ${isPlaying ? "hidden" : ""}`}
                      fill="white"
                    />
                    {isPlaying && (
                      <div className="flex gap-1">
                        <div className="w-2 h-8 bg-white rounded-full" />
                        <div className="w-2 h-8 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                </motion.button>
              </div>
            ) : (
              // Placeholder while loading
              <div className="w-full aspect-video bg-card/50 flex items-center justify-center">
                <div className="text-muted-foreground flex flex-col items-center gap-2">
                  <Video className="w-12 h-12 animate-pulse" />
                  <span className="text-sm">Ładowanie...</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

