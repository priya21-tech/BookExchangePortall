import { Inbox, ArrowUpRightSquare, CheckCircle2, XCircle, Clock, BookOpen } from "lucide-react";

export function Requests() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 pb-32 md:pb-12 flex flex-col gap-14">
      {/* Page Header */}
      <header className="flex flex-col gap-2">
        <h1 className="font-heading text-4xl font-bold text-on-background tracking-tight">Requests Manager</h1>
        <p className="font-sans text-lg text-on-surface-variant">Review incoming exchange offers and track your pending requests.</p>
      </header>

      {/* Incoming Requests Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Inbox className="text-primary h-6 w-6" strokeWidth={2.5} />
          <h2 className="font-heading text-3xl font-bold text-on-background tracking-tight">Incoming Needs Attention</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Incoming Card 1 */}
          <article className="bg-surface-container-lowest rounded-xl p-6 flex flex-col gap-4 shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="flex gap-4 items-start">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJcWIyoJWE_CDvqsfXuEWWKmDm32tq2MGY5QbnVHY2uMInToRbxWckCLx1D-T0DQG6BH9y_i0Wy4gHu7Im9ugCcBwV9by1-cIty9mAAW_9X-iOxHFzn5yGWnnoD4v-igF-1PsRAuFZpED-ri1MdLP6rrdmzUkz4oEA7f20EP_NlJCPFbl6XDFmRF21mI8DndHWNPs1t9TapJv4N_Xu_nN1WCzDRv3gQ1uPPQSgxBtZht8ZzPYsAPdRYIioK7ewKyJ13FD6BJuDqDQ" 
                alt="Organic Chemistry Book" 
                className="w-20 h-28 object-cover rounded shadow-sm bg-surface-variant" 
              />
              <div className="flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold text-on-surface line-clamp-2 leading-tight mb-1">Organic Chemistry 8th Ed.</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-2">Requested by <strong>Alex M.</strong></p>
                <span className="bg-tertiary-fixed text-on-tertiary-fixed font-semibold text-sm px-3 py-1 rounded-full w-fit">Pending</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-outline-variant/30 my-2"></div>
            
            <div className="flex gap-3 mt-auto">
              <button className="flex-1 bg-primary text-on-primary font-medium text-sm py-2 rounded-lg shadow-sm hover:opacity-90 transition-opacity">Accept</button>
              <button className="flex-1 bg-surface-container-low text-primary border border-primary/20 font-medium text-sm py-2 rounded-lg hover:bg-surface-container transition-colors">Reject</button>
            </div>
          </article>

          {/* Incoming Card 2 */}
          <article className="bg-surface-container-lowest rounded-xl p-6 flex flex-col gap-4 shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="flex gap-4 items-start">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQGoKDCM9M57lMBM1zJzo0RrsknTUnfqgancas1qVMbFeF08b8zpFpm7LAW7Pwoa1V8khUBQwG-I3jbUlfSrj_6mPczDHwchtPdJkHxrzZFPpbeGPrr6y6CRCpJt9zicumYxHgxfrthC12n9SpAcOX0J0uRVU2R8wYo2QKYRIwF87DAfjGR7vuTTXdH2XYEfKC90pumgju0tDvhBYWxK2aaSOs1FqjjWHLkcWrvI4qLc69dV-pgygygp_9H0Jj98_rkmCuroZBRV4" 
                alt="Literature Book" 
                className="w-20 h-28 object-cover rounded shadow-sm bg-surface-variant" 
              />
              <div className="flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold text-on-surface line-clamp-2 leading-tight mb-1">Modern World Literature</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-2">Requested by <strong>Sarah K.</strong></p>
                <span className="bg-tertiary-fixed text-on-tertiary-fixed font-semibold text-sm px-3 py-1 rounded-full w-fit">Pending</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-outline-variant/30 my-2"></div>
            
            <div className="flex gap-3 mt-auto">
              <button className="flex-1 bg-primary text-on-primary font-medium text-sm py-2 rounded-lg shadow-sm hover:opacity-90 transition-opacity">Accept</button>
              <button className="flex-1 bg-surface-container-low text-primary border border-primary/20 font-medium text-sm py-2 rounded-lg hover:bg-surface-container transition-colors">Reject</button>
            </div>
          </article>
        </div>
      </section>

      {/* Outgoing Requests Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <ArrowUpRightSquare className="text-outline h-6 w-6" strokeWidth={2.5} />
          <h2 className="font-heading text-3xl font-bold text-on-background tracking-tight">Your Outgoing Requests</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Outgoing Card 1 (Accepted) */}
          <article className="bg-surface-container-lowest rounded-xl p-6 flex flex-col gap-4 shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="flex gap-4 items-start">
              <div className="w-16 h-24 bg-surface-variant rounded flex items-center justify-center shrink-0">
                <BookOpen className="text-primary/50 h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading text-xl font-bold text-on-surface line-clamp-1 mb-1">Calculus Early Transcendentals</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-3">Owner: <strong>Prof. Davis</strong></p>
                <span className="bg-secondary-container text-on-secondary-container font-semibold text-sm px-3 py-1 rounded-full w-fit flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" /> Accepted
                </span>
              </div>
            </div>
          </article>

          {/* Outgoing Card 2 (Rejected) */}
          <article className="bg-surface-container-lowest rounded-xl p-6 flex flex-col gap-4 shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-90">
            <div className="flex gap-4 items-start">
              <div className="w-16 h-24 bg-surface-variant rounded flex items-center justify-center shrink-0">
                <BookOpen className="text-primary/50 h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading text-xl font-bold text-on-surface line-clamp-1 mb-1">Macroeconomics Principles</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-3">Owner: <strong>Library Depot</strong></p>
                <span className="bg-error-container text-on-error-container font-semibold text-sm px-3 py-1 rounded-full w-fit flex items-center gap-1">
                  <XCircle className="h-4 w-4" /> Rejected
                </span>
              </div>
            </div>
          </article>

          {/* Outgoing Card 3 (Pending) */}
          <article className="bg-surface-container-lowest rounded-xl p-6 flex flex-col gap-4 shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="flex gap-4 items-start">
              <div className="w-16 h-24 bg-surface-variant rounded flex items-center justify-center shrink-0">
                <BookOpen className="text-primary/50 h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading text-xl font-bold text-on-surface line-clamp-1 mb-1">Introduction to Algorithms</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-3">Owner: <strong>David W.</strong></p>
                <span className="bg-tertiary-fixed text-on-tertiary-fixed font-semibold text-sm px-3 py-1 rounded-full w-fit flex items-center gap-1">
                  <Clock className="h-4 w-4" /> Pending
                </span>
              </div>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}
