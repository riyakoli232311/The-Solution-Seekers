import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="h-4 w-4" />
              Advanced Security System
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Smart Campus
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Access Control
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure, Fast, Reliable Entry for Students & Staff
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/dashboard">
                  View Dashboard
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our System?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Security",
                description:
                  "AI-powered recognition ensures only authorized personnel gain access to campus facilities.",
              },
              {
                title: "Automated Efficiency",
                description:
                  "Reduce manual checks and streamline entry processes for faster, contactless verification.",
              },
              {
                title: "Real-time Monitoring",
                description:
                  "Track all access events live with instant alerts for unauthorized entry attempts.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card p-6 rounded-lg shadow-card space-y-3"
              >
                <CheckCircle2 className="h-10 w-10 text-success" />
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
