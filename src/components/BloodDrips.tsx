export default function BloodDrips() {
  const drips = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2
  }));

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      {drips.map((drip) => (
        <div
          key={drip.id}
          className="absolute w-1 h-20 bg-gradient-to-b from-red-900 to-transparent opacity-60"
          style={{
            left: `${drip.left}%`,
            animation: `blood-drip ${drip.duration}s linear infinite`,
            animationDelay: `${drip.delay}s`
          }}
        />
      ))}
    </div>
  );
}
