import { Camera, ChevronDown } from "lucide-react";

export function AddBook() {
  return (
    <main className="flex-1 flex justify-center items-center px-6 py-12 pb-[100px] md:pb-12">
      <div className="w-full max-w-lg bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-6 md:p-8">
        <div className="text-center mb-10">
          <h1 className="font-heading text-2xl font-bold text-on-background mb-2">List a Book</h1>
          <p className="font-sans text-sm text-on-surface-variant">Provide details to share with the academic community.</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); }}>
          {/* Image Upload Area */}
          <div className="w-full h-[140px] border-2 border-dashed border-outline-variant/60 rounded-xl flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:border-primary transition-all duration-200 cursor-pointer mb-2 group">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Camera className="text-outline group-hover:text-primary h-5 w-5" />
            </div>
            <span className="font-semibold text-sm">Upload Cover Photo</span>
            <span className="font-sans text-[12px] mt-1 opacity-70">Optional, but recommended</span>
          </div>

          {/* Book Title */}
          <div className="flex flex-col gap-2">
            <label htmlFor="book-title" className="font-semibold text-sm text-on-surface tracking-wide">Book Title</label>
            <input 
              type="text" 
              id="book-title" 
              placeholder="e.g., Organic Chemistry 8th Ed." 
              className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-sans text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
              required
            />
          </div>

          {/* Author */}
          <div className="flex flex-col gap-2">
            <label htmlFor="book-author" className="font-semibold text-sm text-on-surface tracking-wide">Author(s)</label>
            <input 
              type="text" 
              id="book-author" 
              placeholder="e.g., Paula Yurkanis Bruice" 
              className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-sans text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Condition */}
            <div className="flex flex-col gap-2">
              <label htmlFor="book-condition" className="font-semibold text-sm text-on-surface tracking-wide">Condition</label>
              <div className="relative">
                <select 
                  id="book-condition" 
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-sans text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer shadow-sm"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select condition</option>
                  <option value="new">Like New</option>
                  <option value="good">Good</option>
                  <option value="annotated">Annotated</option>
                  <option value="fair">Fair</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-outline h-5 w-5 pointer-events-none" />
              </div>
            </div>

            {/* Type */}
            <div className="flex flex-col gap-2">
              <label htmlFor="listing-type" className="font-semibold text-sm text-on-surface tracking-wide">Type</label>
              <div className="relative">
                <select 
                  id="listing-type" 
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-sans text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer shadow-sm"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Listing type</option>
                  <option value="sale">For Sale</option>
                  <option value="exchange">Exchange</option>
                  <option value="both">Both</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-outline h-5 w-5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="mt-6 pt-6 border-t border-surface-container">
            <button 
              type="submit" 
              className="w-full py-3 bg-primary text-on-primary font-medium text-[15px] rounded-lg shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-all duration-200"
            >
              Submit Listing
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
