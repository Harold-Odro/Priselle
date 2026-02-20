export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:rounded-lg focus:text-white focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: 'var(--color-primary)',
        outlineColor: 'var(--color-accent)'
      }}
    >
      Skip to main content
    </a>
  )
}
