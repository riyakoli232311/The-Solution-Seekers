import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, CreditCard, Bell, FileText, Network, Database } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Vehicle Number Plate Recognition",
    description:
      "AI-powered CCTV integration automatically detects and verifies vehicle number plates for seamless gate access.",
  },
  {
    icon: CreditCard,
    title: "ID Card Scanning & Verification",
    description:
      "Instant validation of student and staff ID cards against the campus database for secure authentication.",
  },
  {
    icon: Bell,
    title: "Real-time Monitoring & Alerts",
    description:
      "Live dashboard updates with instant notifications for unauthorized access attempts and security breaches.",
  },
  {
    icon: FileText,
    title: "Access Logs & Reports",
    description:
      "Comprehensive activity logs with downloadable reports for auditing and compliance purposes.",
  },
  {
    icon: Network,
    title: "Multi-gate Scalability",
    description:
      "Support for multiple entry points with centralized control and monitoring across the entire campus.",
  },
  {
    icon: Database,
    title: "Secure Data Management",
    description:
      "Encrypted storage of all access records with role-based permissions for administrative control.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">System Features</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security features designed for modern campus access control
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="shadow-card hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
