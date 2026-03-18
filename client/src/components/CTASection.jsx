import { useState } from 'react'

export default function CTASection() {
  const [url, setUrl] = useState('')
  const [shortened, setShortened] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const handleShorten = async () => {
    if (!url.trim()) {
      setError('Please enter a URL to shorten.')
      return
    }
    setError('')
    setLoading(true)
    // Simulate API call — replace with real backend call
    await new Promise(r => setTimeout(r, 900))
    setShortened(`https://lnksnp.io/${Math.random().toString(36).slice(2, 8)}`)
    setLoading(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortened)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="get-started" className="relative py-28 bg-[#f0effe] overflow-hidden">
      {/* subtle top wave divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Pill badge */}
        <span className="inline-block bg-pink-100 text-pink-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-pink-200 uppercase tracking-wider">
          Try it now — it&apos;s free
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          Start Shortening<br />
          <span className="text-indigo-600">Your Links</span>
        </h2>
        <p className="text-gray-500 text-lg font-medium mb-10">
          Create, manage, and analyze your links in seconds. No account required to try.
        </p>

        {/* Input row */}
        <div className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl shadow-xl border border-indigo-100 mb-4">
          <input
            type="url"
            value={url}
            onChange={e => { setUrl(e.target.value); setError('') }}
            onKeyDown={e => e.key === 'Enter' && handleShorten()}
            placeholder="Paste your long URL here..."
            className="flex-1 px-5 py-3.5 text-gray-700 placeholder-gray-400 bg-transparent outline-none text-sm font-medium"
          />
          <button
            onClick={handleShorten}
            disabled={loading}
            className="btn-primary bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 flex items-center gap-2 justify-center min-w-[140px]"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                </svg>
                Shortening…
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
                Shorten Now
              </>
            )}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm font-medium mb-4">{error}</p>
        )}

        {/* Result */}
        {shortened && !loading && (
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 bg-white border border-green-200 rounded-2xl px-5 py-4 shadow-md animate-pulse-soft">
            <div className="flex-1 text-left">
              <p className="text-xs text-gray-400 font-medium mb-0.5">Your shortened link</p>
              <a href={shortened} target="_blank" rel="noreferrer" className="text-indigo-600 font-bold text-sm hover:underline break-all">
                {shortened}
              </a>
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>
        )}

        <p className="mt-6 text-xs text-gray-400">
          By using LinkSnip you agree to our{' '}
          <a href="#" className="underline hover:text-indigo-500 transition-colors">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="underline hover:text-indigo-500 transition-colors">Privacy Policy</a>.
        </p>
      </div>
    </section>
  )
}
