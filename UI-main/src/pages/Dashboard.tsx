import { BookOpen, Search, SlidersHorizontal, ArrowRight, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const BOOKS = [
  {
    id: "1",
    title: "Introduction to Algorithms, 3rd Edition",
    author: "Thomas H. Cormen",
    price: "$65.00",
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC0ECx7_85kLlGm3qz0NGZYjqocXpoAPLx_8C-3ufnOUyFvlxGpo9XWmQClbN83Kq9YydwI7n3u7LpvaUOuEb6lVhkFB5Vzs_YVclLy3onP2LnlYhyvTzNAmEZCECN-BDc8Mj8sk51yV3hBkfdz5fQ_HarSUDRZf9QGanxdwufPnSsCt-44CvxqwnLdsqULPyIs9XRPLB6jaDMf-VyWaI45vePsXT6bEMs9maQtORIVWyz4LythCavvrL7eX5vKqy6XNG9lpzHEFc",
    condition: "Like New",
    category: "Computer Science",
    ownerInitials: "MJ",
    ownerName: "Mike J.",
    isExchange: false,
    ownerColor: "bg-tertiary-container text-on-tertiary-container"
  },
  {
    id: "2",
    title: "Principles of Microeconomics",
    author: "N. Gregory Mankiw",
    price: null,
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs4SDH5EZ8krgQRD-PaHggSHdEwWMb4HsY_Zj5LIxu7f2sdYHZtYQhu_t9fKy9FTGDHfsSJTtgpVDDBfJdsrpzfYWjXFAwaAucOVgsP8K3HPFVlWudSNqW-dXLLkE53_ZAVVldSWXhhySflNi81XdTAd6KtU-KTmDalUL26sJ5YspbWmOW-YIlWLifiA1GthWXKxiNmKAKy4RLzeVLXpojc9kIQ8H7zcnNBtWzv0QMGrd8MCyc_VRtOiyQsF7ZKJsBehWcECGiaRQ",
    condition: "Good",
    category: "Economics",
    ownerInitials: "AL",
    ownerName: "Anna L.",
    isExchange: true,
    ownerColor: "bg-surface-tint text-on-primary"
  },
  {
    id: "3",
    title: "The Norton Anthology of English Lit",
    author: "Stephen Greenblatt",
    price: "$15.00",
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXtKOT_PRDyic2cI93QACRht_xTYyN0Uy87fH0hvyutS3VkR4URe11f1fSpflmwPVFE1mBStiUENersPcRgLq0f2_wSXYMAGlIYjRmB8r_mhNs2rwAaYaQixUFxbxnNrVVbAUAuZvhNtXzsGr6O5JXkHvteQmpRMHhNeDpD91Jn9PQ2GwA35FH2qch9y3gbo4lLVQBaA22qzIgUej5Zpu-Iyew-_Ye-2ttke-2ZrKpCep2PTb1YCzYXA3dttSRxVjmiUqfguVLikU",
    condition: "Annotated",
    category: "Literature",
    ownerInitials: "SR",
    ownerName: "Sarah R.",
    isExchange: false,
    ownerColor: "bg-secondary text-on-secondary"
  },
  {
    id: "4",
    title: "Campbell Biology, 12th Edition",
    author: "Lisa A. Urry",
    price: "$40.00",
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcUzobkeUccUNudxo943uBT3KC_goGS3hmroRJwCLG0SsWgTTmJJukBuHmSQfeXHz_VLO0OcsPjg3gesHhxtivhu36Icy5R3nwnp3O7w_6MQPGr8AstzFH8ujQlB2T8RNhZQffQyH2evCNMBs2vwik4CQ7BvohubahluFMohbq4ly72OYyu3JNoexZwKK_Xn-KZT26rFKQcSuaDz980ZE5JPJlCdIZIq2GmzMeOELB1jhqDWBO3IwnabfQeyo3D9POzo3Zcn703p0",
    condition: "Fair",
    category: "Biology",
    ownerInitials: "KP",
    ownerName: "Kevin P.",
    isExchange: true, // "or Exchange"
    ownerColor: "bg-surface-variant text-on-surface-variant"
  }
];

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 w-full">
      {/* Header & Search Section */}
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold text-on-surface mb-1 tracking-tight">Find Your Next Text</h1>
          <p className="font-sans text-lg text-on-surface-variant">
            Search thousands of peer-listed textbooks for sale or direct exchange across campus.
          </p>
        </div>
        <div className="w-full lg:w-[480px] relative mt-4 lg:mt-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search by Title, Author, or ISBN..." 
            className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl font-sans text-on-surface placeholder-on-surface-variant/70 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none shadow-sm"
          />
        </div>
      </header>

      {/* Filters (Bento-style layout for web, scrollable for mobile) */}
      <section className="mb-10 flex flex-wrap items-center gap-4">
        <div className="flex bg-surface-container rounded-lg p-1 shadow-sm">
          <button className="px-5 py-1.5 bg-surface-container-lowest text-primary rounded-[6px] font-semibold text-sm shadow-sm border border-outline-variant/20">
            All Listing
          </button>
          <button className="px-5 py-1.5 text-on-surface-variant hover:text-on-surface rounded-[6px] font-medium text-sm transition-colors">
            For Sale
          </button>
          <button className="px-5 py-1.5 text-on-surface-variant hover:text-on-surface rounded-[6px] font-medium text-sm transition-colors">
            Exchange Only
          </button>
        </div>
        
        <div className="h-6 w-px bg-outline-variant/50 hidden md:block mx-2"></div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar items-center">
          {["Computer Science", "Economics", "Biology"].map(cat => (
            <button key={cat} className="px-4 py-1.5 bg-surface-container border border-outline-variant/40 text-on-surface-variant hover:bg-surface-variant rounded-full font-medium text-sm whitespace-nowrap transition-colors">
              {cat}
            </button>
          ))}
          <button className="px-4 py-1.5 bg-surface-container-lowest border border-outline text-on-surface rounded-full font-medium text-sm whitespace-nowrap flex items-center gap-1.5 hover:bg-surface-variant transition-colors ml-2">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </section>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {BOOKS.map((book) => (
          <article 
            key={book.id} 
            className="bg-surface-container-lowest rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,74,198,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group border border-outline-variant/20"
          >
            <div className="h-56 w-full bg-surface-variant relative overflow-hidden rounded-t-xl">
              <img 
                src={book.coverUrl} 
                alt={book.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              
              <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                {book.price && (
                  <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full shadow-sm font-semibold text-sm backdrop-blur-sm bg-opacity-90">
                    {book.price}
                  </div>
                )}
                {book.isExchange && (
                  <div className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-full shadow-sm font-semibold text-[10px] backdrop-blur-sm bg-opacity-90 flex items-center gap-1">
                    <RefreshCw className="h-3 w-3" /> {book.price ? "or Exchange" : "Exchange"}
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="bg-surface-container-high text-on-surface px-2.5 py-0.5 rounded-full font-semibold text-[11px] uppercase tracking-wider">
                  {book.condition}
                </span>
                <span className="bg-primary/5 text-primary px-2.5 py-0.5 rounded-full font-semibold text-[11px] uppercase tracking-wider">
                  {book.category}
                </span>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-on-surface mb-1 line-clamp-2 leading-tight">
                {book.title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant mb-6">
                {book.author}
              </p>
              
              <div className="mt-auto pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={cn("w-7 h-7 rounded-full flex items-center justify-center font-semibold text-[11px]", book.ownerColor)}>
                    {book.ownerInitials}
                  </div>
                  <span className="font-sans text-sm text-on-surface-variant font-medium">{book.ownerName}</span>
                </div>
                
                <Link to={`/book/${book.id}`} className="bg-transparent text-primary font-medium text-sm hover:text-primary-container transition-colors flex items-center gap-1">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
