import Login from '@/layouts/AuthLayout/Login';

const LoginPage = () => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-linear-to-br from-primary/10 via-background to-primary/5 p-4 sm:p-6 md:p-10">

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in oklch, var(--color-primary) 25%, transparent) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-150 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 size-64 rounded-full bg-primary/15 blur-2xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 size-64 rounded-full bg-primary/15 blur-2xl" />

      {/* Decorative rings — top right (desktop only) */}
      <div className="pointer-events-none absolute top-8 right-8 hidden size-28 rounded-full border border-primary/25 md:block" />
      <div className="pointer-events-none absolute top-4 right-4 hidden size-40 rounded-full border border-primary/15 md:block" />

      {/* Decorative rings — bottom left (desktop only) */}
      <div className="pointer-events-none absolute bottom-8 left-8 hidden size-28 rounded-full border border-primary/25 md:block" />
      <div className="pointer-events-none absolute bottom-4 left-4 hidden size-40 rounded-full border border-primary/15 md:block" />

      {/* Top wave */}
      <svg
        className="pointer-events-none absolute top-0 left-0 w-full text-primary/8"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z" />
      </svg>

      {/* Bottom wave */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full text-primary/10"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
      </svg>

<div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-4xl">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
