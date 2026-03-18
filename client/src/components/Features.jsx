const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    color: 'indigo',
    badge: 'Instant',
    title: 'Fast Link Shortening',
    description: 'Generate clean, short URLs in milliseconds. Share them anywhere — social, email, or your own app.',
    highlights: ['Vanity URLs', 'Bulk shortening', 'Custom aliases'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: 'purple',
    badge: 'Real-time',
    title: 'Analytics Dashboard',
    description: 'Track every click with detailed insights — geography, referrer, device, and time-series data.',
    highlights: ['Click heatmaps', 'UTM tracking', 'Export CSV'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: 'pink',
    badge: 'Enterprise',
    title: 'Secure & Reliable',
    description: '99.9% uptime SLA with HTTPS everywhere, link expiry, password protection, and spam filtering.',
    highlights: ['Link expiration', 'Password protect', 'SSL enforced'],
  },
]

const colorMap = {
  indigo: {
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    badge: 'bg-indigo-100 text-indigo-600',
    highlight: 'bg-indigo-600',
    border: 'border-indigo-100 hover:border-indigo-300',
  },
  purple: {
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    badge: 'bg-purple-100 text-purple-600',
    highlight: 'bg-purple-600',
    border: 'border-purple-100 hover:border-purple-300',
  },
  pink: {
    bg: 'bg-pink-50',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    badge: 'bg-pink-100 text-pink-600',
    highlight: 'bg-pink-500',
    border: 'border-pink-100 hover:border-pink-300',
  },
}

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-indigo-100 uppercase tracking-wider">
            Everything you need
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Built for speed,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              built for scale.
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium">
            Everything you need to shorten, share, and study your links — in one elegant platform.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const c = colorMap[feature.color]
            return (
              <div
                key={idx}
                className={`feature-card relative bg-white rounded-2xl p-8 border ${c.border} shadow-sm transition-all duration-300 overflow-hidden group`}
              >
                {/* Top color strip */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${c.highlight} rounded-t-2xl`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${c.iconBg} ${c.iconColor} rounded-xl mb-5`}>
                  {feature.icon}
                </div>

                {/* Badge */}
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${c.badge} mb-3`}>
                  {feature.badge}
                </span>

                <h3 className="text-xl font-black text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{feature.description}</p>

                {/* Feature highlights */}
                <ul className="space-y-2">
                  {feature.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <svg className={`w-4 h-4 ${c.iconColor} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: 'currentColor' }}>
                  <span className={`${c.iconColor}`}>Learn more</span>
                  <svg className={`w-3.5 h-3.5 ${c.iconColor}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
