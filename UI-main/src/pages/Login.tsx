import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="min-h-screen flex selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Left Column: Form Canvas */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 bg-surface-container-lowest relative z-10 shadow-[0_0_24px_rgba(0,0,0,0.02)] lg:shadow-none">
        <div className="max-w-[420px] w-full mx-auto">
          {/* Brand Anchor */}
          <div className="mb-12">
            <Link to="/" className="font-heading text-2xl font-bold text-primary flex items-center gap-2 tracking-tight w-fit">
              <BookOpen className="h-7 w-7" strokeWidth={2.5} />
              ScholarlyBooks
            </Link>
          </div>

          {/* Page Intent Header */}
          <div className="mb-8 space-y-2">
            <h1 className="font-heading text-3xl font-bold text-on-surface tracking-tight">Welcome back</h1>
            <p className="font-sans text-on-surface-variant">Log in to manage your textbook exchanges.</p>
          </div>

          {/* Authentication Form */}
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = '/'; }}>
            {/* Email Input Group */}
            <div className="space-y-2">
              <label htmlFor="email" className="block font-semibold text-sm text-on-surface tracking-wide">University Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="student@university.edu" 
                className="w-full px-4 py-[14px] bg-surface border border-outline-variant rounded-lg font-sans text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                required
              />
            </div>

            {/* Password Input Group */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label htmlFor="password" className="block font-semibold text-sm text-on-surface tracking-wide">Password</label>
                <a href="#" className="font-sans text-sm font-medium text-primary hover:text-primary-container transition-colors duration-200">Forgot password?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                placeholder="•••••••••" 
                className="w-full px-4 py-[14px] bg-surface border border-outline-variant rounded-lg font-sans text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                required
              />
            </div>

            {/* Action Cluster */}
            <div className="pt-2 space-y-4">
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-medium text-[15px] py-[14px] rounded-lg hover:bg-on-primary-fixed-variant transition-colors duration-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
              >
                Sign In
              </button>
              
              <Link 
                to="/signup" 
                className="w-full flex justify-center bg-transparent border border-outline-variant text-on-surface font-medium text-[15px] py-[14px] rounded-lg hover:bg-surface-container transition-colors duration-200"
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column: Visual Anchor (Hidden on Mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-surface-container-high overflow-hidden">
        {/* Background Image with Theme Tinting */}
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpap_1VX-wTI-tVEdSmiPKoO3Te0YLo4owRxhtneC1LXnQGfX94dj11aeAYYpSgvz6Zzxs3PVUEfSBFZMp1GDysB2sfMvFGSIRyXwWfTeR8srsogAw4YkT3N-5_yHGLTv7jprwnrecUIh3E2jg7KP5HOMr1TYTo78MTRRk3EZHS7RaBTQRtix-3byXojgqxnSWzfHUqVO562ngCYrFbp_C_q6Zc51mTl4dD4hOXiQmQ8iIlfEj-xWLkjChZBczjbibQnhbDikZjpQ" 
          alt="Stack of academic textbooks" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40"
        />
        {/* Soft Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-variant/90 to-surface-container-high/60 mix-blend-multiply"></div>
        
        {/* Decorative Testimonial Card */}
        <div className="absolute bottom-12 left-12 right-12 p-8 bg-surface/90 backdrop-blur-md rounded-xl border border-surface-container-lowest/50 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] max-w-lg">
          <div className="flex gap-1 text-primary mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="font-heading text-xl font-bold text-on-surface mb-4 leading-snug">
            "The easiest way to find required texts for my major without breaking the bank."
          </p>
          <p className="font-sans text-on-surface-variant">
            — Sarah J., Engineering
          </p>
        </div>
      </div>
    </div>
  );
}
