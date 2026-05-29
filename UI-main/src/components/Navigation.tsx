import { BookOpen, Home, PlusCircle, ArrowLeftRight, User, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export function Navigation() {
  const location = useLocation();

  // Hide navigation on auth pages
  if (['/login', '/signup'].includes(location.pathname)) {
    return null;
  }

  const navLinks = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Add Book", href: "/add", icon: PlusCircle },
    { name: "My Requests", href: "/requests", icon: ArrowLeftRight },
    { name: "Profile", href: "#", icon: User },
    // Hidden link just for easy access to admin panel in preview
    { name: "Admin", href: "/admin", icon: undefined, hiddenMenu: true },
  ];

  return (
    <>
      {/* TopNavBar (Desktop) */}
      <nav className="hidden md:flex sticky top-0 z-50 bg-white border-b border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.03)] font-heading tracking-tight w-full">
        <div className="flex justify-between items-center w-full px-6 py-3 max-w-7xl mx-auto">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="text-primary h-6 w-6" strokeWidth={2.5} />
            <span className="text-xl font-extrabold text-primary tracking-tight">ScholarlyBooks</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-medium pb-1 transition-all duration-200 border-b-2 hover:text-primary",
                    isActive 
                      ? "text-primary border-primary font-semibold opacity-90" 
                      : "text-slate-500 border-transparent hover:border-primary/30"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Trailing Actions */}
          <div className="flex items-center">
            <Link to="/login" className="text-slate-400 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-slate-50">
              <LogOut className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 border-t border-slate-200 rounded-t-xl bg-white/90 backdrop-blur-md shadow-[0_-4px_12px_-1px_rgba(0,0,0,0.05)] pb-safe">
        <div className="flex justify-around items-center h-16 pointer-events-auto">
          {navLinks.filter(l => !l.hiddenMenu).map((link) => {
            const isActive = location.pathname === link.href;
            const Icon = link.icon!;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 w-full h-full",
                  isActive 
                    ? "text-primary scale-105" 
                    : "text-slate-500 hover:bg-slate-50"
                )}
              >
                <Icon className={cn("h-5 w-5 mb-1", isActive && "fill-primary/20")} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[11px] font-heading font-semibold">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
