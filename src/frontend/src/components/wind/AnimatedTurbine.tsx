export default function AnimatedTurbine() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <img
        src="/assets/generated/wind-turbine-icon.dim_256x256.png"
        alt="Animated wind turbine rotating continuously"
        className="w-full h-full object-contain animate-spin"
        style={{ animationDuration: '4s' }}
      />
    </div>
  );
}
