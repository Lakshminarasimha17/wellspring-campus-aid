import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Brain, 
  Heart, 
  Shield, 
  Users, 
  AlertTriangle,
  BookOpen,
  MessageCircle,
  BarChart3,
  Bell
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Wellness Tracking",
    description: "Monitor sleep patterns, activity levels, and mood indicators using subtle, non-intrusive methods.",
    color: "text-wellness-mint"
  },
  {
    icon: Brain,
    title: "AI-Powered Emotional Analysis", 
    description: "Advanced sentiment analysis from journal entries and interaction patterns to detect early signs of distress.",
    color: "text-wellness-lavender"
  },
  {
    icon: BarChart3,
    title: "Personalized Wellness Dashboard",
    description: "Beautiful, insightful dashboards showing your wellness trends, achievements, and personalized recommendations.",
    color: "text-primary"
  },
  {
    icon: AlertTriangle,
    title: "Early Warning System",
    description: "Intelligent alerts to counselors and mentors when students show signs of burnout or mental health concerns.",
    color: "text-warning"
  },
  {
    icon: BookOpen,
    title: "Mental Health Resources",
    description: "Curated library of breathing exercises, meditation guides, journaling prompts, and wellness tips.",
    color: "text-wellness-sage"
  },
  {
    icon: Users,
    title: "Peer Support Network",
    description: "Connect with wellness buddies, join support groups, and participate in campus wellness challenges.",
    color: "text-wellness-coral"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-wellness-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Heart className="h-4 w-4" />
            Comprehensive Wellness Platform
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for <span className="bg-gradient-wellness bg-clip-text text-transparent">Mental Wellness</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with human compassion to create a comprehensive wellness ecosystem for students.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 border border-border shadow-soft hover:shadow-wellness transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-primary/10 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="bg-gradient-to-r from-wellness-coral/10 to-wellness-lavender/10 rounded-2xl p-8 md:p-12 border border-wellness-coral/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Silent Crisis on Campus
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Students silently battle stress, burnout, anxiety, and isolation while institutions focus solely on academic performance. Mental health remains invisible until it's too late.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-warning rounded-full" />
                  <span className="text-foreground">80%+ students feel overwhelmed during exams</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-warning rounded-full" />
                  <span className="text-foreground">Institutions lack real-time wellness insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="text-foreground">Early intervention saves lives and futures</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card rounded-xl p-6 border border-border shadow-wellness">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="h-5 w-5 text-warning" />
                  <span className="font-semibold text-foreground">Wellness Alert</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Alex's wellness score has decreased by 30% over the past week. Recommended actions:
                </p>
                <div className="space-y-2">
                  <Button variant="calm" size="sm" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Schedule counselor check-in
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Send wellness resources
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};