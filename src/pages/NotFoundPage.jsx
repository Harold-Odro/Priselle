import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden"
      style={{background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'}}
    >
      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(95, 115, 100, 0.2)'}}></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(47, 111, 115, 0.3)'}}></div>
      </div>

      <div className="relative max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1
            className="text-9xl mb-4"
            style={{
              color: 'var(--color-accent-light)',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600
            }}
          >
            404
          </h1>
          <div
            className="h-1 w-32 mx-auto mb-8"
            style={{background: 'linear-gradient(90deg, var(--color-accent-light), var(--color-accent))'}}
          ></div>
          <h2
            className="text-3xl md:text-4xl text-white mb-4"
            style={{fontFamily: "'Playfair Display', Georgia, serif"}}
          >
            Page Not Found
          </h2>
          <p className="text-xl mb-8" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Home className="mr-2 h-5 w-5" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 backdrop-blur-md text-white rounded-xl font-semibold transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = 'var(--color-accent-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
