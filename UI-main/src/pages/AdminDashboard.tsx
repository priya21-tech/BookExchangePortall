import { 
  Users, 
  TrendingUp, 
  Clock, 
  AlertTriangle, 
  Handshake, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  Search,
  Star
} from "lucide-react";

export function AdminDashboard() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8 pb-32 md:pb-10">
      {/* Page Header */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-4xl font-bold text-on-background tracking-tight">Moderator Dashboard</h1>
          <p className="font-sans text-lg text-on-surface-variant mt-2">System overview and pending moderation queues.</p>
        </div>
        <div className="flex gap-4">
          <button className="font-medium text-[15px] text-on-surface-variant bg-surface-container hover:bg-surface-container-high px-4 py-2 rounded-full flex items-center transition-colors shadow-sm">
            <Download className="mr-2 h-[18px] w-[18px]" /> Export Report
          </button>
        </div>
      </header>

      {/* Bento Grid: Key Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Metric Card 1 */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container-highest flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider">Total Active Users</span>
            <span className="bg-primary-fixed text-primary p-2 rounded-lg">
              <Users className="h-6 w-6" />
            </span>
          </div>
          <div className="mt-4">
            <span className="font-heading text-3xl font-bold text-on-surface">12,450</span>
            <div className="font-sans text-sm text-secondary mt-1 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" /> +3.2% from last week
            </div>
          </div>
        </div>

        {/* Metric Card 2 */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container-highest flex flex-col justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-error-container opacity-20 rounded-bl-full -z-10"></div>
          <div className="flex justify-between items-start z-10">
            <span className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider">Pending Approvals</span>
            <span className="bg-error-container text-error p-2 rounded-lg">
              <Clock className="h-6 w-6" />
            </span>
          </div>
          <div className="mt-4 z-10">
            <span className="font-heading text-3xl font-bold text-on-surface">84</span>
            <div className="font-sans text-sm text-error mt-1 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-1" /> Requires immediate action
            </div>
          </div>
        </div>

        {/* Metric Card 3 */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container-highest flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider">Successful Exchanges</span>
            <span className="bg-secondary-container text-secondary p-2 rounded-lg">
              <Handshake className="h-6 w-6" />
            </span>
          </div>
          <div className="mt-4">
            <span className="font-heading text-3xl font-bold text-on-surface">3,291</span>
            <div className="font-sans text-sm text-on-surface-variant mt-1 flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-1" /> Lifetime total
            </div>
          </div>
        </div>
      </section>

      {/* Book Listings Moderation Table */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-heading text-2xl font-bold text-on-background">Book Listings Queue</h2>
          <button className="font-medium text-sm text-primary hover:bg-surface-variant px-4 py-1.5 rounded-full transition-colors flex items-center">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-highest overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-surface-container-low border-b border-surface-variant">
                  <th className="font-semibold text-sm text-on-surface-variant px-6 py-4">Listing Details</th>
                  <th className="font-semibold text-sm text-on-surface-variant px-6 py-4">Seller Info</th>
                  <th className="font-semibold text-sm text-on-surface-variant px-6 py-4">Condition</th>
                  <th className="font-semibold text-sm text-on-surface-variant px-6 py-4">Price</th>
                  <th className="font-semibold text-sm text-on-surface-variant px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant/50">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-16 rounded bg-surface-variant flex-shrink-0 bg-cover bg-center shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCInLo0qMDtlPrsjg8UzYF7H9LcXYODg9gMkB7PKiTV7WPN8TU2Od4ElAZ7A-lja_sUb5Xbli7KFS7vtAOBd-_4xtkimeF16xwZynpSZWn5XwODdWIdsQMLfRfTTEWSD55T2JpTcrerjUwipm_N0Ig9bNAM49lh8QCPYEgYUKNNaD3oqsY32W3n8sBQetA_pPJ_YFwj8bQvbMToPC9X7eJKLKbMHKnKb8H2CCnNI--ZL5oFFUVXpMd7h3gBRwbhSLfmQbnGSMCuqkc')" }}
                      ></div>
                      <div>
                        <p className="font-sans text-base text-on-surface font-medium line-clamp-1">Introduction to Algorithms, 3rd Ed.</p>
                        <p className="font-sans text-sm text-on-surface-variant">Thomas H. Cormen</p>
                        <p className="font-semibold text-[11px] text-outline mt-1 uppercase">ISBN: 978-0262033848</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="font-sans text-base text-on-surface">Sarah Jenkins</p>
                    <p className="font-sans text-sm text-on-surface-variant">Computer Science, Yr 3</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-variant text-on-surface-variant font-semibold text-[12px]">
                      Like New
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-sans text-base text-on-surface font-medium">$45.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-2">
                      <button className="font-medium text-[13px] bg-primary text-on-primary hover:bg-on-primary-fixed-variant px-4 py-2 rounded-full transition-colors shadow-sm">Approve</button>
                      <button className="font-medium text-[13px] bg-error-container text-error hover:bg-error hover:text-on-error px-4 py-2 rounded-full transition-colors shadow-sm">Delete</button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-16 rounded bg-surface-variant flex-shrink-0 bg-cover bg-center shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0d-AqL5oBj1nFpytHGM1JQPdPYZsqA0_sWTs8QH9jJo-6oHABRzwu7pGUDgLQswSNA0rN6YS1Qhzk9H-s5L132AVBGu79VcMkHSHGc5ZVBIX0LlpiIwXIJmwU3tRqb043uinKW6y__-nr-DtEha-KTlNGktT0Ai25FqA3aXIc8mQRhCDU503DXsqevcd1MX5z5E5z0dzQjOkR_k8DUb-nfqzZViK0hSEe33uzsaA1iSmsLILvcEtMtAS22b2kCD1VXXPR7wdd2GE')" }}
                      ></div>
                      <div>
                        <p className="font-sans text-base text-on-surface font-medium line-clamp-1">Gray's Anatomy for Students</p>
                        <p className="font-sans text-sm text-on-surface-variant">Richard Drake</p>
                        <p className="font-semibold text-[11px] text-outline mt-1 uppercase">ISBN: 978-0323393041</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="font-sans text-base text-on-surface">Michael Chang</p>
                    <p className="font-sans text-sm text-on-surface-variant">Pre-Med, Yr 2</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-semibold text-[12px]">
                      Heavily Annotated
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-sans text-base text-on-surface font-medium">$20.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-2">
                      <button className="font-medium text-[13px] bg-primary text-on-primary hover:bg-on-primary-fixed-variant px-4 py-2 rounded-full transition-colors shadow-sm">Approve</button>
                      <button className="font-medium text-[13px] bg-error-container text-error hover:bg-error hover:text-on-error px-4 py-2 rounded-full transition-colors shadow-sm">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* User Management List */}
      <section>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
          <h2 className="font-heading text-2xl font-bold text-on-background">Recent Users</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none w-full sm:w-64 transition-all shadow-sm"
            />
          </div>
        </div>
        
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-highest overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-surface-container-low border-b border-surface-variant">
                  <th className="font-semibold text-sm text-on-surface-variant px-6 py-4">User</th>
                  <th className="font-semibold text-sm text-on-surface-variant px-6 py-4">Email / ID</th>
                  <th className="font-semibold text-sm text-on-surface-variant px-6 py-4">Trust Score</th>
                  <th className="font-semibold text-sm text-on-surface-variant px-6 py-4">Status</th>
                  <th className="font-semibold text-sm text-on-surface-variant px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant/50">
                {/* User Row 1 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-heading text-lg font-bold">EL</div>
                    <span className="font-sans text-base text-on-surface font-medium">Emily Larson</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="font-sans text-sm text-on-surface">elarson@university.edu</p>
                    <p className="font-sans text-[12px] text-on-surface-variant">ID: 982-11-443</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-tertiary-container">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-sans text-sm font-medium ml-1.5 text-on-surface">4.9</span>
                      <span className="font-sans text-sm text-on-surface-variant ml-1">(42)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 text-secondary font-semibold text-[12px]">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span> Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="font-medium text-[13px] border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-on-surface px-4 py-2 rounded-full transition-colors">Manage</button>
                  </td>
                </tr>

                {/* User Row 2 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center font-heading text-lg font-bold">JD</div>
                    <span className="font-sans text-base text-on-surface font-medium">John Doe</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="font-sans text-sm text-on-surface">jdoe_suspect@gmail.com</p>
                    <p className="font-sans text-[12px] text-on-surface-variant">ID: 112-99-001</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-on-surface-variant">
                      <Star className="h-4 w-4" />
                      <span className="font-sans text-sm ml-1.5">New User</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 text-error font-semibold text-[12px]">
                      <span className="w-2 h-2 rounded-full bg-error"></span> Flagged
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="font-medium text-[13px] bg-error-container text-error hover:bg-error hover:text-on-error px-4 py-2 rounded-full transition-colors">Review</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
