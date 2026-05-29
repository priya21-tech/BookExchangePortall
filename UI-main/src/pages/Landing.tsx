import { Link } from "react-router-dom";

export function Landing() {
  return (
    <div className="bg-surface font-sans text-on-background antialiased overflow-x-hidden">
      {/* TopNavBar */}
      <nav className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-white/20 shadow-[0_8px_32px_0_rgba(59,130,246,0.1)] w-full">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl min-w-[200px]">
            <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0058be] to-[#8127cf] tracking-tight">
              ScholarlyBooks
            </span>
          </div>
          
          <div className="hidden md:flex items-center justify-center gap-8 font-sans font-medium">
            <a href="#how-it-works" className="text-blue-600 font-bold border-b-2 border-blue-500 pb-1">How it Works</a>
            <a href="#features" className="text-slate-600 hover:text-blue-500 transition-colors">Features</a>
            <a href="#reviews" className="text-slate-600 hover:text-blue-500 transition-colors">Reviews</a>
          </div>
          
          <div className="flex items-center justify-end gap-4 min-w-[200px]">
            <Link to="/login" className="text-slate-600 font-medium px-4 py-2 hover:scale-105 transition-transform duration-200">Login</Link>
            <Link to="/signup" className="bg-gradient-to-br from-[#0058be] to-[#8127cf] text-white px-6 py-2 rounded-full font-bold shadow-[0_4px_14px_0_rgba(129,39,207,0.39)] hover:shadow-[0_6px_20px_rgba(129,39,207,0.23)] hover:scale-105 transition-all duration-200">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6 overflow-hidden min-h-[70vh] flex items-center justify-center">
          {/* Abstract Background Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full -z-10 opacity-40 mix-blend-multiply pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#d8e2ff] blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#f0dbff] blur-[120px] rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0058be]/10 text-[#0058be] text-[12px] font-bold tracking-[0.05em] uppercase">The Future of Reading</span>
            <h1 className="font-heading text-5xl md:text-[64px] font-extrabold text-on-background leading-[1.1] tracking-[-0.04em]">How BookSwap Works</h1>
            <p className="font-sans text-lg md:text-xl font-medium text-on-surface-variant max-w-2xl mx-auto leading-[1.6]">
              Ditch the overpriced bookstore. Join thousands of students trading, selling, and discovering academic gems directly on campus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md mx-auto">
              <Link to="/signup" className="w-full sm:w-auto bg-gradient-to-br from-[#0058be] to-[#8127cf] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_30px_-5px_rgba(0,88,190,0.3)] hover:scale-105 transition-transform duration-200 text-center">
                Continue to Sign Up
              </Link>
              <Link to="/login" className="w-full sm:w-auto bg-white/70 backdrop-blur-md border border-white/20 text-on-background px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-200 text-center">
                Login
              </Link>
            </div>
          </div>
        </section>

        {/* Step-by-Step Section */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-[1rem] flex flex-col items-start gap-6 hover:-translate-y-1 transition-transform shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]">
               <div className="w-16 h-16 rounded-2xl bg-[#adc6ff] flex items-center justify-center">
                 <svg className="w-8 h-8 text-[#0058be]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
               </div>
               <div>
                 <h3 className="font-heading text-[24px] font-bold mb-2 tracking-tight">List Your Book</h3>
                 <p className="text-on-surface-variant font-sans text-[16px]">Snap a photo, set your price or trade preference in seconds.</p>
               </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-[1rem] flex flex-col items-start gap-6 hover:-translate-y-1 transition-transform shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]">
               <div className="w-16 h-16 rounded-2xl bg-[#f0dbff] flex items-center justify-center">
                 <svg className="w-8 h-8 text-[#8127cf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
               </div>
               <div>
                 <h3 className="font-heading text-[24px] font-bold mb-2 tracking-tight">Browse or Request</h3>
                 <p className="text-on-surface-variant font-sans text-[16px]">Explore campus collections or post a "Wanted" request.</p>
               </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-[1rem] flex flex-col items-start gap-6 hover:-translate-y-1 transition-transform shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]">
               <div className="w-16 h-16 rounded-2xl bg-[#ffd8e7] flex items-center justify-center">
                 <svg className="w-8 h-8 text-[#a12e70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                 </svg>
               </div>
               <div>
                 <h3 className="font-heading text-[24px] font-bold mb-2 tracking-tight">Exchange or Buy</h3>
                 <p className="text-on-surface-variant font-sans text-[16px]">Securely pay or finalize a swap agreement through our app.</p>
               </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-[1rem] flex flex-col items-start gap-6 hover:-translate-y-1 transition-transform shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]">
               <div className="w-16 h-16 rounded-2xl bg-[#dae2fd] flex items-center justify-center">
                 <svg className="w-8 h-8 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                 </svg>
               </div>
               <div>
                 <h3 className="font-heading text-[24px] font-bold mb-2 tracking-tight">Connect with Students</h3>
                 <p className="text-on-surface-variant font-sans text-[16px]">Meet on campus for a safe hand-off and make new connections.</p>
               </div>
            </div>

          </div>
        </section>

        {/* Features Bento Grid */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[32px] font-extrabold mb-4 tracking-[-0.03em]">Why ScholarlyBooks?</h2>
            <p className="text-on-surface-variant font-sans text-lg font-medium">The smarter way to handle your semester reading.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min md:h-[600px]">
            {/* Feature 1 */}
            <div className="md:col-span-8 bg-white/70 backdrop-blur-xl border border-white/40 p-10 rounded-[1rem] relative overflow-hidden group shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]">
               <div className="relative z-10">
                 <div className="bg-blue-100/50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                   <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                   </svg>
                 </div>
                 <h3 className="font-heading text-[24px] font-bold mb-2 tracking-tight">No middleman</h3>
                 <p className="text-on-surface-variant font-sans text-lg font-medium max-w-sm">Direct peer-to-peer exchanges mean 0% commissions and maximum transparency.</p>
               </div>
               <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#0058be]/10 rounded-full blur-3xl group-hover:bg-[#0058be]/20 transition-all"></div>
            </div>

            {/* Feature 2 */}
            <div className="md:col-span-4 bg-[#9c48ea] p-10 rounded-[1rem] text-white flex flex-col justify-end shadow-md">
               <svg className="w-10 h-10 mb-6" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
               </svg>
               <h3 className="font-heading text-[24px] font-bold mb-2 tracking-tight">Safe student-only</h3>
               <p className="font-sans text-base opacity-90">Verification via .edu emails ensures a trusted environment for everyone.</p>
            </div>

            {/* Feature 3 */}
            <div className="md:col-span-4 bg-[#c0488a] p-10 rounded-[1rem] text-white flex flex-col justify-end shadow-md">
               <svg className="w-10 h-10 mb-6" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
               </svg>
               <h3 className="font-heading text-[24px] font-bold mb-2 tracking-tight">Easy exchange</h3>
               <p className="font-sans text-base opacity-90">In-app messaging and meeting spot suggestions make it seamless.</p>
            </div>

            {/* Feature 4 */}
            <div className="md:col-span-8 bg-white/70 backdrop-blur-xl border border-white/40 p-10 rounded-[1rem] relative overflow-hidden group shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]">
               <div className="relative z-10 flex flex-col h-full justify-end">
                 <div className="bg-green-100/50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                   <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h3 className="font-heading text-[24px] font-bold mb-2 tracking-tight">Save money</h3>
                 <p className="text-on-surface-variant font-sans text-lg font-medium max-w-sm">Keep up to 80% more of your money compared to university bookstore buybacks.</p>
               </div>
               <div className="absolute -right-10 -top-10 w-60 h-60 bg-[#a12e70]/10 rounded-full blur-3xl group-hover:bg-[#a12e70]/20 transition-all"></div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section id="reviews" className="bg-[#eaedff] py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-heading text-[32px] font-extrabold tracking-[-0.03em] leading-[1.2]">Used by students across campuses</h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-[48px] font-heading font-extrabold text-[#0058be] leading-none mb-2">100+</div>
                  <p className="font-sans text-[12px] font-bold tracking-[0.05em] uppercase text-on-surface-variant">Books listed</p>
                </div>
                <div>
                  <div className="text-[48px] font-heading font-extrabold text-[#8127cf] leading-none mb-2">50+</div>
                  <p className="font-sans text-[12px] font-bold tracking-[0.05em] uppercase text-on-surface-variant">Exchanges done</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC726pN9j9itlMx7mzmrFTOmWTcKI82nVB0pFJUeKGmKrEsNB-73AIQVEwfDoNQ5DQ7_EEm6RLR6zxr2qTNZRtL8Mxk0mNo3SxONv-oVmJ7sLdIS_NiBzC2su4EYcnMCrl91xHNjmyIUzF-_hr9VyA4qVyTNf5aDCdv7DAo64KX46mUAUc-8X-rj6oxPNdBVGptmulATVbfMVPKhObpQoniMtHWSRdT2nps6Bzgllq8p_f0HirgRJXI1wADQ37iyU3l9IVFFYAaeUI" alt="User 1" className="w-[44px] h-[44px] rounded-full ring-2 ring-white object-cover" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6CZXJ6bIHzlLjPPwLfeU_RSwHdLWlsGBrjwMAUj8dixmIO9Dpk_D1ry9y7bi91lU0A2MgBPRl15IxixsdjPOjiJa5Yt95GYrd6n7feqUFs7u8ewsrlm0noPNcjT6LLlV-C68jK4T5LP6JjGsZIRGPxZ4AORzN2jtMTWuYDV7A-lpnSUbw3f7bjqgGqg1uI-nAaPhndQUb0C0cPeaMArmUomwQjyTHHn1JRUSj2Aa3lubk3LqIU6b2NvwcSYLJiqa_KvdvHmZ7DxQ" alt="User 2" className="w-[44px] h-[44px] rounded-full ring-2 ring-white object-cover" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbQaAmJd4Gf7OcNlXLAAnrDM8iWUjDDO2cU4GXfagKc0RMvTkEtTxTxAN9GfSYQCBnJDVp560eMdMMcEm8ooBqnWHT-dHLCKIgC1bwbjxRSBvJBQxqfyyXkW_VXh-xIV94LS1gXdK5eP390M4SEHqzm-geGYvU3O7hfv3ef4UjkwVbU8ANKtC1jEKiwhWfvOl8RBF0UxWgJQe-V9Co8RhQam0zeExgYIjRmrQ9uq6WBD38UcYu43YMFg_VPbhaseU4LDOkHnn2DCs" alt="User 3" className="w-[44px] h-[44px] rounded-full ring-2 ring-white object-cover" />
                </div>
                <p className="font-sans text-[14px] font-medium text-on-surface-variant">Join 2k+ active students</p>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl rotate-1 border border-white max-w-lg mx-auto">
              <div className="flex gap-1 mb-6 text-[#8127cf]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <p className="font-sans text-lg font-medium italic mb-8 leading-relaxed text-on-surface">"I saved over $300 on textbooks this semester just by swapping with seniors. The app is so smooth and feels like it was actually built for us."</p>
              <div className="flex items-center gap-4">
                <div className="w-[48px] h-[48px] rounded-full bg-[#d8e2ff] overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF4oQchQE8yjdsQAEZCX6d7cdaybItVbvDTDZRu5_z-iBYqxLDV0DUYuTS8GFx1ZkhlO6uOiCAdaZ5JO3iQAnaHz9fFGV8ng7VuXDadYxzUNk5ADuCgJZT14oj8yn4GUw7uM0ah6GQbgDWH-jMBMIaC0r6S1THfwIvj3eJ6A7LuNPxqgCvN7yZilI9MAuMruAGZvPnZAvD_2M4SUtSzndX1MhDh5Hs0xLjS9_MABsGVp2RLDs5WYZyeokdXQuuwCVQSPTWgtYtRYs" alt="Alex Rivera" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-sans font-bold text-on-background">Alex Rivera</p>
                  <p className="font-sans text-[14px] text-on-surface-variant">Junior @ State Tech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 relative z-10 w-full mb-20 md:mb-0">
          <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl p-10 md:p-16 rounded-[2rem] text-center border border-[#0058be]/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-[#d8e2ff]/30 -z-10"></div>
            
            <h2 className="font-heading text-4xl font-extrabold mb-6 tracking-tight text-on-background">Ready to start exchanging?</h2>
            <p className="font-sans text-lg font-medium text-on-surface-variant mb-10 max-w-xl mx-auto leading-relaxed">
              Join the campus-wide movement for sustainable and affordable education. Your next book is waiting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup" className="w-full sm:w-auto bg-gradient-to-br from-[#0058be] to-[#8127cf] text-white px-10 py-5 rounded-full font-bold text-xl shadow-[0_10px_30px_-5px_rgba(0,88,190,0.3)] hover:scale-105 transition-transform duration-200 block">
                  Sign Up Now
              </Link>
              <Link to="/login" className="w-full sm:w-auto bg-transparent border-2 border-[#0058be] text-[#0058be] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#0058be]/5 transition-all duration-200 block">
                  Login
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white/80 border-t border-slate-200 py-12 px-6 pb-32 md:pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto font-sans text-sm font-medium">
          <div className="font-heading font-extrabold text-slate-900 text-xl tracking-tight">ScholarlyBooks</div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-slate-500 hover:text-[#0058be] transition-colors hover:underline decoration-2 underline-offset-4">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-[#0058be] transition-colors hover:underline decoration-2 underline-offset-4">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-[#0058be] transition-colors hover:underline decoration-2 underline-offset-4">Contact Us</a>
            <a href="#" className="text-slate-500 hover:text-[#0058be] transition-colors hover:underline decoration-2 underline-offset-4">Instagram</a>
          </div>
          <div className="text-slate-500 text-center md:text-left">
            © 2024 ScholarlyBooks. Built for the next generation of readers.
          </div>
        </div>
      </footer>
    </div>
  );
}
