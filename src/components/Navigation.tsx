import { Search, LogIn, UserPlus, LogOut, User, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";

interface NavigationProps {
  isAuthenticated?: boolean;
  isDashboard?: boolean;
}

const Navigation = ({ isAuthenticated = false, isDashboard = false }: NavigationProps) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Recommendations", href: "/recommendations" },
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <header className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">W</span>
            </div>
            <span className="text-xl font-bold text-foreground">WorkWarden</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors text-sm font-medium ${location.pathname === item.href 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Search, Theme Toggle, and Auth */}
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            {!isDashboard && (
              <div className="hidden lg:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search jobs..."
                    className="pl-10 w-64 bg-background border-border rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="w-9 h-9 rounded-xl"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Authentication Buttons */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="rounded-xl">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="rounded-xl">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="btn-modern">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;