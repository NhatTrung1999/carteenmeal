import { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LoadingScreenProps {
  visible: boolean;
  onDone: () => void;
  duration?: number;
}

const LoadingScreen = ({
  visible,
  onDone,
  duration = 2500,
}: LoadingScreenProps) => {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onDone, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, onDone]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-6 bg-background animate-in fade-in duration-300">
      {/* Lottie */}
      <div className="w-56 sm:w-72">
        <DotLottieReact
          src="/animations/loading-carteen-meal.json"
          loop
          autoplay
          className="w-full"
        />
      </div>

      {/* Branding */}
      <div className="flex flex-col items-center gap-1">
        <p className="text-lg font-semibold text-foreground">
          LYG Carteen Meal
        </p>
        <p className="text-sm text-muted-foreground">
          Setting up your dashboard...
        </p>
      </div>

      {/* Dots */}
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="size-1.5 rounded-full bg-primary"
            style={{
              animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
