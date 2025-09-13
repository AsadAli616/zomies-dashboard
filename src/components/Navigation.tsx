import { NavLink } from "react-router-dom";
import {
  Home,
  BookOpen,
  BarChart3,
  CreditCard,
  User,
  Zap,
  FileText,
} from "lucide-react";
import foxMascot from "@/assets/fox-mascot.png";

const Navigation = () => {
  const navItems = [
    { name: "Home", path: "/student", icon: Home },
    { name: "Quizzes", path: "/student/quizzes", icon: Zap },
    { name: "Notes", path: "/student/notes", icon: FileText },
    { name: "Performance", path: "/student/performance", icon: BarChart3 },
    { name: "Flashcards", path: "/student/flashcards", icon: BookOpen },
    { name: "Billing", path: "/student/billing", icon: CreditCard },
    { name: "Profile", path: "/student/profile", icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary-light shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={foxMascot}
              alt="Zoomies Fox"
              className="w-10 h-10 rounded-full bg-white p-1"
            />
            <span className="text-white font-bold text-xl">zoomies</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white/20 text-white shadow-lg"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Hidden by default, would need state management to show/hide */}
      <div className="md:hidden bg-primary-light/90 backdrop-blur-sm border-t border-white/10">
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
