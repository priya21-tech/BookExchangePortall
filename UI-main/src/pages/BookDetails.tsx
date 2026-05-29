import { ArrowLeft, MapPin, Send, ArrowLeftRight, Star, StarHalf } from "lucide-react";
import { Link } from "react-router-dom";

export function BookDetails() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8">
      {/* Back Navigation */}
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-on-primary-fixed-variant transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to Search Results
      </Link>

      {/* Bento Grid Layout for Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Image Area */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.04)] p-6 flex items-center justify-center sticky top-24">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByGY5FNQ31OLVLa_CVpGvzIIxBitC1vnXyzUtYVpkojT9_9mDjLhMMRcbZLmKmaM1L6RUNLpShLejh_iKtNs2BLObqSvfNqka7P1iTDAj6cxPs6Qs4Tqa2s0w8hCmd4XQRLNwiYUvij4TIrW0hyu3GBpZfrTRK9nedlQYUJKDSWj8gczCIRiV8sBfVSoSXb2N4PQt1oIY9QoepIKyTYqA3rFVbkjPEjehrY-qps33mIRJGB3rZoOvFIVStsydX77owfQaUd3gmj0U"
              alt="Introduction to Algorithms Cover"
              className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-md border border-outline-variant/20"
            />
          </div>
        </div>

        {/* Right Column: Content Area */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Title & Author */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-surface-container text-on-surface font-semibold text-sm px-3 py-1.5 rounded-full border border-outline-variant/30">Like New</span>
              <span className="bg-primary/5 text-primary font-semibold text-sm px-3 py-1.5 rounded-full border border-primary/10">Computer Science</span>
            </div>
            <h1 className="font-heading text-4xl font-bold text-on-surface mb-2 leading-tight tracking-tight">Introduction to Algorithms, Fourth Edition</h1>
            <p className="font-heading text-2xl font-semibold text-on-surface-variant">by Thomas H. Cormen, Charles E. Leiserson</p>
          </div>

          {/* Owner / Trust Card */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVa29nMUgWotTWYqm9cT7HyrD7JOaQvhhB2JbumNf8nG507-d9j0f4qs1TYseP3L4f4s9gjO2wfjOh4Fpuk5VjFkrQTY9JWaAl59WSziXAgLZHNcv3hLPnwddaTKCPD0DIEGP4sA_lDPhmRUeT2f_qCWWPr_oKA_SQ7LKmXG2gFM8F6hLGjFgKrmfY8IWpqVexH8m1twlikk8F19DGBLKzu7ewAFrgsjnpOQuOKm2nBJbklAplkWNdSZLv3t6iLUxnrghVcUTq1a4"
                alt="Seller profile"
                className="w-12 h-12 rounded-full object-cover border border-outline-variant/50"
              />
              <div>
                <p className="font-semibold text-sm text-on-surface">Listed by Alex Chen</p>
                <p className="font-sans text-[13px] text-on-surface-variant flex items-center gap-1 mt-1">
                  <MapPin className="h-[14px] w-[14px]" />
                  Engineering Building (North Campus)
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex text-tertiary-fixed-dim items-center gap-[2px]">
                <Star className="h-[18px] w-[18px] fill-current" />
                <Star className="h-[18px] w-[18px] fill-current" />
                <Star className="h-[18px] w-[18px] fill-current" />
                <Star className="h-[18px] w-[18px] fill-current" />
                <StarHalf className="h-[18px] w-[18px] fill-current" />
              </div>
              <p className="font-semibold text-[13px] text-primary mt-1.5">4.8 (24 Exchanges)</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-on-surface mb-4">About this book</h3>
            <div className="font-sans text-base text-on-surface-variant space-y-4 leading-relaxed">
              <p>This is the standard textbook for advanced data structures and algorithms. I used it for CS 412 last semester. The condition is pristine—no highlighting, dog-eared pages, or spine damage. It comes with the original dust jacket.</p>
              <p>I'm primarily looking to exchange this for "Operating System Concepts, 10th Edition" or open to selling it directly. Happy to meet anywhere on North Campus during weekdays.</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-outline-variant/30">
            <div>
              <p className="font-sans text-sm text-outline mb-1">ISBN-13</p>
              <p className="font-sans text-base text-on-surface font-medium">978-0262046305</p>
            </div>
            <div>
              <p className="font-sans text-sm text-outline mb-1">Publisher</p>
              <p className="font-sans text-base text-on-surface font-medium">MIT Press</p>
            </div>
            <div>
              <p className="font-sans text-sm text-outline mb-1">Year</p>
              <p className="font-sans text-base text-on-surface font-medium">2022</p>
            </div>
            <div>
              <p className="font-sans text-sm text-outline mb-1">Format</p>
              <p className="font-sans text-base text-on-surface font-medium">Hardcover</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="flex-1 bg-primary text-on-primary font-medium text-[15px] py-3.5 px-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
              <Send className="h-4 w-4" />
              Send Request
            </button>
            <button className="flex-1 bg-surface-container text-primary font-medium text-[15px] py-3.5 px-6 rounded-lg hover:bg-surface-container-high transition-colors duration-200 flex items-center justify-center gap-2">
              <ArrowLeftRight className="h-4 w-4" />
              Exchange Book
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
