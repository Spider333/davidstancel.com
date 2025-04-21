import { motion } from 'framer-motion';

const floatingIconsConfig = [
  {
    id: 1,
    path: "M9 18l6-6-6-6",
    left: "10%",
    top: "20%",
    size: 64,
    duration: 35
  },
  {
    id: 2,
    path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    left: "70%",
    top: "30%",
    size: 48,
    duration: 25,
    delay: 2
  },
  {
    id: 3,
    path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    left: "40%",
    top: "80%",
    size: 72,
    duration: 40,
    delay: 4
  },
  {
    id: 4,
    path: "M3 3h18v18H3zM9 9l6 6M15 9l-6 6",
    left: "85%",
    top: "60%",
    size: 56,
    duration: 30,
    delay: 6
  }
];

export default function FloatingIcons() {
  return (
    <div className="floating-icons fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {floatingIconsConfig.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute opacity-5"
          style={{
            left: icon.left,
            top: icon.top,
          }}
          animate={{
            y: [100, -100],
            x: [0, 100],
            rotate: [0, 360],
            opacity: [0, 0.05, 0.05, 0]
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay || 0,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={icon.size}
            height={icon.size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={icon.path} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
