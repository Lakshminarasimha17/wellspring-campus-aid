import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Brain, 
  Moon, 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  MessageCircle, 
  Target,
  Calendar
} from "lucide-react";

export const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-wellness-lavender/20 border border-wellness-lavender/30 rounded-full px-4 py-2 text-sm font-medium text-foreground mb-4">
            <Brain className="h-4 w-4 text-primary" />
            Interactive Wellness Dashboard
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your <span className="bg-gradient-wellness bg-clip-text text-transparent">Personal</span> Wellness Command Center
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get real-time insights into your mental health, track progress, and receive personalized recommendations for a healthier, happier you.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-card to-wellness-sage/5 rounded-2xl border border-border shadow-wellness p-6 md:p-8">
            
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Welcome back, Alex! 👋</h3>
                <p className="text-muted-foreground">Here's your wellness overview for today</p>
              </div>
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <Button variant="calm" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Today
                </Button>
                <Button variant="outline" size="sm">Weekly View</Button>
              </div>
            </div>

            {/* Wellness Score */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-gradient-wellness text-white border-0">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white/90">Overall Wellness Score</h4>
                  <TrendingUp className="h-5 w-5 text-white/80" />
                </div>
                <div className="text-3xl font-bold mb-2">78/100</div>
                <p className="text-white/80 text-sm">+12 points from last week</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-wellness-mint/20 rounded-lg flex items-center justify-center">
                    <Heart className="h-5 w-5 text-wellness-mint" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mood</h4>
                    <p className="text-sm text-muted-foreground">Positive</p>
                  </div>
                </div>
                <Progress value={85} className="mb-2" />
                <p className="text-xs text-muted-foreground">85% above your average</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-wellness-lavender/20 rounded-lg flex items-center justify-center">
                    <Moon className="h-5 w-5 text-wellness-lavender" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sleep Quality</h4>
                    <p className="text-sm text-muted-foreground">7.5 hours</p>
                  </div>
                </div>
                <Progress value={75} className="mb-2" />
                <p className="text-xs text-muted-foreground">Good quality sleep</p>
              </Card>
            </div>

            {/* Weekly Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-foreground">This Week's Insights</h4>
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
                    <div className="w-2 h-2 bg-success rounded-full mt-2" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Great progress on stress management</p>
                      <p className="text-xs text-muted-foreground">Your meditation sessions are paying off!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Social interaction could improve</p>
                      <p className="text-xs text-muted-foreground">Consider joining a study group or campus activity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Consistent sleep schedule</p>
                      <p className="text-xs text-muted-foreground">Keep up the good work with bedtime routine</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-foreground">Recommended Actions</h4>
                  <Target className="h-5 w-5 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <Button variant="calm" className="w-full justify-start" size="sm">
                    <Brain className="h-4 w-4 mr-3" />
                    Take 5-minute mindfulness break
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <MessageCircle className="h-4 w-4 mr-3" />
                    Journal about your day
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Heart className="h-4 w-4 mr-3" />
                    Connect with a friend
                  </Button>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Emergency Support</p>
                    <Button variant="success" className="w-full" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat with Campus Counselor
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Experience Your Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};