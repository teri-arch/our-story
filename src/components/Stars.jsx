export default function Stars() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {Array.from({ length: 80 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white opacity-70 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}