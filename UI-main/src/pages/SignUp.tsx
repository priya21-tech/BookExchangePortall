import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="min-h-screen flex selection:bg-primary-fixed selection:text-on-primary-fixed bg-surface-container-lowest">
      {/* Left Form Panel */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:w-1/2 xl:w-5/12 z-10 relative">
        <div className="mx-auto w-full max-w-md lg:w-96 px-6 py-12">
          {/* Brand & Header */}
          <div className="mb-10">
            <Link to="/" className="flex items-center gap-2 mb-8 inline-flex">
              <BookOpen className="text-primary h-7 w-7" strokeWidth={2.5} />
              <span className="font-heading text-2xl font-bold text-primary tracking-tight">ScholarlyBooks</span>
            </Link>
            <h1 className="font-heading text-3xl font-bold text-on-surface mb-2 tracking-tight">Create your account</h1>
            <p className="font-sans text-on-surface-variant">Join the academic marketplace for effortless textbook exchange.</p>
          </div>

          {/* Form Area */}
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = '/'; }}>
            <div>
              <label htmlFor="full-name" className="block font-semibold text-sm text-on-surface mb-2 tracking-wide">Full Name</label>
              <input 
                type="text" 
                id="full-name" 
                required 
                className="block w-full rounded-md border border-outline-variant bg-surface-container-lowest px-4 py-2.5 font-sans text-on-surface shadow-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-outline/70" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-semibold text-sm text-on-surface mb-2 tracking-wide">University Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                className="block w-full rounded-md border border-outline-variant bg-surface-container-lowest px-4 py-2.5 font-sans text-on-surface shadow-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-outline/70" 
              />
              <p className="mt-2 font-sans text-[13px] text-on-surface-variant">Please use your .edu address (e.g., student@university.edu)</p>
            </div>
            
            <div>
              <label htmlFor="password" className="block font-semibold text-sm text-on-surface mb-2 tracking-wide">Create Password</label>
              <input 
                type="password" 
                id="password" 
                required 
                className="block w-full rounded-md border border-outline-variant bg-surface-container-lowest px-4 py-2.5 font-sans text-on-surface shadow-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-outline/70" 
              />
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block font-semibold text-sm text-on-surface mb-2 tracking-wide">Confirm Password</label>
              <input 
                type="password" 
                id="confirm-password" 
                required 
                className="block w-full rounded-md border border-outline-variant bg-surface-container-lowest px-4 py-2.5 font-sans text-on-surface shadow-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-outline/70" 
              />
            </div>
            
            <div className="flex items-center pt-2">
              <input 
                type="checkbox" 
                id="terms" 
                required 
                className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" 
              />
              <label htmlFor="terms" className="ml-3 block font-sans text-sm text-on-surface-variant">
                I agree to the <a href="#" className="text-primary hover:text-primary-container font-medium hover:underline transition-colors">Terms of Service</a> and <a href="#" className="text-primary hover:text-primary-container font-medium hover:underline transition-colors">Privacy Policy</a>
              </label>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.04)] font-medium text-[15px] text-on-primary bg-primary hover:bg-primary-container focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-8 text-center border-t border-outline-variant/30 pt-6">
            <p className="font-sans text-on-surface-variant">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary hover:text-primary-container font-semibold hover:underline transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="relative hidden w-0 flex-1 lg:block bg-surface-container-low overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9q_CgNLw7-vuy2TMRNP0BrxWs4EDzlaqSIfprVTixqe2azlxXcmBu4hxPuGtKpS0jZyHoK81bSBzrvhLnc3RvMXs5lALssNQlZpa__UwIF-L-FJwcF-JiJuREGUM_Y3shVnnBxUR_oJPJmkSufugVpvqcdZqxmbb8aHDhFmzeTSwi2zP2EzM0swSBPRwu-rNhlVmMYtpROZirrZXznXJmqsCAYbCEyNbaTKfPpySFX70k26p6f2umKQY-XapC5L-Bj84p4wTeKq0" 
          alt="Library interior showing long tables" 
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
      </div>
    </div>
  );
}
