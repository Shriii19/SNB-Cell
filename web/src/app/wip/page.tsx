import Link from "next/link";

export default function WorkInProgress() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#030712] text-white px-6 text-center">
      <div className="rounded-full bg-blue-500/10 p-4 mb-6 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
        Work in Progress
      </h1>
      <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg">
        This feature is currently under development. Check back soon as we prepare to launch!
      </p>
      <Link 
        href="/"
        className="rounded-full  px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105 shadow-[0_8px_20px_rgba(255,255,255,0.1)] inline-flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Return to Home
      </Link>
    </div>
  );
}
