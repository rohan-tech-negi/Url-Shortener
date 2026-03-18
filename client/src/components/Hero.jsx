export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f0effe] pt-20">
      {/* Radial dot pattern */}
      <div className="radial-pattern" />

      {/* Concentric dashed circles */}
      <div className="concentric-circles">
        {[180, 320, 460, 600, 740].map((size, i) => (
          <span
            key={i}
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      {/* Pink star — top left */}
      <div className="absolute top-24 left-8 md:left-20 animate-float">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <path
            d="M45 5 L47 38 L80 38 L54 56 L64 85 L45 67 L26 85 L36 56 L10 38 L43 38 Z"
            fill="#f472b6"
            stroke="#f472b6"
            strokeWidth="0"
          />
          {/* star burst */}
          <line x1="45" y1="0" x2="45" y2="90" stroke="#f472b6" strokeWidth="4" strokeLinecap="round"/>
          <line x1="0" y1="45" x2="90" y2="45" stroke="#f472b6" strokeWidth="4" strokeLinecap="round"/>
          <line x1="13" y1="13" x2="77" y2="77" stroke="#f472b6" strokeWidth="4" strokeLinecap="round"/>
          <line x1="77" y1="13" x2="13" y2="77" stroke="#f472b6" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Blue star — bottom right */}
      <div className="absolute bottom-24 right-8 md:right-20 animate-float-slow">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <line x1="40" y1="0" x2="40" y2="80" stroke="#4f46e5" strokeWidth="5" strokeLinecap="round"/>
          <line x1="0" y1="40" x2="80" y2="40" stroke="#4f46e5" strokeWidth="5" strokeLinecap="round"/>
          <line x1="12" y1="12" x2="68" y2="68" stroke="#4f46e5" strokeWidth="5" strokeLinecap="round"/>
          <line x1="68" y1="12" x2="12" y2="68" stroke="#4f46e5" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Outlined hexagon — left middle */}
      <div className="absolute left-4 md:left-16 top-1/2 -translate-y-12 animate-float" style={{ animationDelay: '1s' }}>
        <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
          <polygon points="32,2 62,18 62,54 32,70 2,54 2,18" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
          <polygon points="32,14 50,24 50,48 32,58 14,48 14,24" stroke="#c084fc" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      </div>

      {/* Outlined hexagon — right middle */}
      <div className="absolute right-4 md:right-16 top-1/3 animate-float-slow" style={{ animationDelay: '2s' }}>
        <svg width="56" height="64" viewBox="0 0 56 64" fill="none">
          <polygon points="28,2 54,16 54,48 28,62 2,48 2,16" stroke="#818cf8" strokeWidth="2.5" fill="none"/>
        </svg>
      </div>

      {/* Small pink circle — top right area */}
      <div className="absolute top-32 right-1/4 animate-pulse-soft">
        <div className="w-5 h-5 rounded-full bg-pink-400 opacity-60" />
      </div>

      {/* Small indigo circle — bottom left area */}
      <div className="absolute bottom-40 left-1/4 animate-pulse-soft" style={{ animationDelay: '1.5s' }}>
        <div className="w-4 h-4 rounded-full bg-indigo-400 opacity-60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 border border-indigo-200">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
          Now with Advanced Analytics
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight text-gray-900 uppercase mb-8">
          <span className="block">Shorten Links.</span>
          <span className="block mt-2">Track Everything.</span>
          <span className="block mt-2">
            <span className="highlight-strip relative inline-block text-gray-900">
              Grow
            </span>
            {' '}Faster.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-10">
          A powerful and simple URL shortener built for developers and creators.
          One click to shorten, one dashboard to rule them all.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#get-started"
            className="btn-primary bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-4 rounded-xl text-lg shadow-xl hover:shadow-indigo-300 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started Free
          </a>
          <a
            href="#features"
            className="group flex items-center gap-2 text-gray-600 font-semibold hover:text-indigo-600 transition-colors duration-200"
          >
            See how it works
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-400 font-medium">No credit card required · Free forever plan</p>

        {/* Stats row */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {[
            { value: '10M+', label: 'Links Shortened' },
            { value: '500K+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-indigo-600">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
