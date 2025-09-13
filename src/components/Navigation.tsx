import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Shield, Users, BarChart3 } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-wellness rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">WellnessMonitor</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#dashboard" className="text-foreground hover:text-primary transition-smooth">
              Dashboard
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-smooth">
              Resources
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="wellness">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-foreground hover:text-primary transition-smooth py-2">
                Features
              </a>
              <a href="#dashboard" className="text-foreground hover:text-primary transition-smooth py-2">
                Dashboard
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth py-2">
                About
              </a>
              <a href="#resources" className="text-foreground hover:text-primary transition-smooth py-2">
                Resources
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button variant="wellness" className="justify-start">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};