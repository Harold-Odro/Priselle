export default function PageSkeleton() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: 'var(--color-background)' }}
    >
      {/* Navigation Skeleton */}
      <div
        className="h-20 flex items-center justify-between px-6"
        style={{ background: 'var(--color-background-alt)' }}
      >
        <div
          className="w-32 h-10 rounded-lg animate-pulse"
          style={{ background: 'var(--color-gray-200)' }}
        />
        <div className="hidden md:flex gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-16 h-4 rounded animate-pulse"
              style={{ background: 'var(--color-gray-200)' }}
            />
          ))}
        </div>
        <div
          className="w-24 h-10 rounded-lg animate-pulse"
          style={{ background: 'var(--color-gray-200)' }}
        />
      </div>

      {/* Hero Section Skeleton */}
      <div
        className="py-24 sm:py-32"
        style={{ background: 'linear-gradient(145deg, var(--color-primary-dark), var(--color-primary))' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="h-12 sm:h-16 w-3/4 mx-auto rounded-lg mb-6 animate-pulse"
            style={{ background: 'rgba(255, 255, 255, 0.15)' }}
          />
          <div
            className="h-6 w-2/3 mx-auto rounded mb-4 animate-pulse"
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
          />
          <div
            className="h-6 w-1/2 mx-auto rounded animate-pulse"
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
          />
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div
              className="h-10 w-64 mx-auto rounded-lg mb-4 animate-pulse"
              style={{ background: 'var(--color-gray-200)' }}
            />
            <div
              className="h-4 w-96 max-w-full mx-auto rounded animate-pulse"
              style={{ background: 'var(--color-gray-100)' }}
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl p-8"
                style={{ background: 'var(--color-background-alt)' }}
              >
                <div
                  className="w-14 h-14 rounded-xl mb-6 animate-pulse"
                  style={{ background: 'var(--color-gray-200)' }}
                />
                <div
                  className="h-6 w-3/4 rounded mb-3 animate-pulse"
                  style={{ background: 'var(--color-gray-200)' }}
                />
                <div
                  className="h-4 w-full rounded mb-2 animate-pulse"
                  style={{ background: 'var(--color-gray-100)' }}
                />
                <div
                  className="h-4 w-5/6 rounded mb-2 animate-pulse"
                  style={{ background: 'var(--color-gray-100)' }}
                />
                <div
                  className="h-4 w-2/3 rounded animate-pulse"
                  style={{ background: 'var(--color-gray-100)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shimmer overlay animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-pulse {
          background-image: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
