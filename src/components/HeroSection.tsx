import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Heart, Brain, Shield } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-calm opacity-30" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-wellness-mint/20 border border-wellness-mint/30 rounded-full px-4 py-2 text-sm font-medium text-foreground mb-8">
            <Heart className="h-4 w-4 text-primary" />
            Because Mental Health is Non-Negotiable
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Student <span className="bg-gradient-hero bg-clip-text text-transparent">Wellness</span> Monitor
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Your smart, real-time well-being companion on campus.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Monitor wellness trends, get AI-powered insights, and receive support before it's too late. 
            We're building a campus where everyone feels seen, heard, and supported.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="lg" className="group">
              Start Your Wellness Journey
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="group bg-background/80 backdrop-blur-sm">
              <Play className="h-4 w-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-wellness rounded-lg mx-auto mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">80%+</div>
              <div className="text-muted-foreground">Students report feeling overwhelmed</div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-wellness rounded-lg mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-muted-foreground">Real-time wellness monitoring</div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-wellness rounded-lg mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">100%</div>
              <div className="text-muted-foreground">Privacy-focused design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};