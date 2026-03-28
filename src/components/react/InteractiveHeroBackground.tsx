import { motion } from 'framer-motion';

export default function InteractiveHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient dark */}
      <div className="absolute inset-0 bg-vyroba-coal opacity-90" />
      
      {/* Animated subtle shapes resembling wood rings or industrial patterns */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1] 
        }}
        transition={{ 
          duration: 150, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-10"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(31, 41, 55, 0.4) 60%, rgba(17, 24, 39, 0.9) 100%)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Warm glow accent (the "Wood" element) */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-vyroba-oak blur-[150px] rounded-full mix-blend-screen pointer-events-none"
      />
      
      {/* Steel/Industrial cold glow */}
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
          x: [-20, 20, -20]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-sky-900 blur-[200px] rounded-full mix-blend-screen pointer-events-none"
      />
    </div>
  );
}