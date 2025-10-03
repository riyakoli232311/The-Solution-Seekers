import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Mail, Users, Code } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Project Info */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">About This Project</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A hackathon project demonstrating smart campus access control using AI-powered verification
          </p>
        </div>

        {/* Team Section */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Project Team
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This Smart Campus Access Verification System was developed as a hackathon prototype to demonstrate
              how modern technology can enhance campus security through automated access control.
            </p>
            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-2">Technologies Used</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• React & TypeScript</li>
                  <li>• AI/ML for plate recognition</li>
                  <li>• Real-time data processing</li>
                  <li>• Secure authentication</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vehicle number plate detection</li>
                  <li>• ID card verification</li>
                  <li>• Real-time monitoring</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Get In Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell us more..." 
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full gap-2">
                <Mail className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Project Links */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Project Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline">
                View Documentation
              </Button>
              <Button variant="outline">
                GitHub Repository
              </Button>
              <Button variant="outline">
                API Reference
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
