import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle, AlertTriangle, Camera, Search, Users, Car } from "lucide-react";

type AccessLog = {
  id: string;
  time: string;
  vehicleNumber: string;
  idNumber: string;
  status: "granted" | "denied";
  name: string;
};

const mockLogs: AccessLog[] = [
  { id: "1", time: "10:23 AM", vehicleNumber: "KA-01-AB-1234", idNumber: "STU-2024-001", status: "granted", name: "John Doe" },
  { id: "2", time: "10:18 AM", vehicleNumber: "KA-02-CD-5678", idNumber: "STU-2024-002", status: "granted", name: "Sarah Wilson" },
  { id: "3", time: "10:15 AM", vehicleNumber: "KA-03-EF-9012", idNumber: "UNKNOWN", status: "denied", name: "Unknown" },
  { id: "4", time: "10:12 AM", vehicleNumber: "KA-01-GH-3456", idNumber: "STAFF-2024-045", status: "granted", name: "Prof. Smith" },
  { id: "5", time: "10:08 AM", vehicleNumber: "KA-04-IJ-7890", idNumber: "STU-2024-003", status: "granted", name: "Mike Chen" },
];

const Dashboard = () => {
  const [idInput, setIdInput] = useState("");
  const [verificationResult, setVerificationResult] = useState<"granted" | "denied" | null>(null);
  const [detectedPlate] = useState("KA-01-AB-1234");

  const handleVerification = () => {
    // Simulate verification
    if (idInput.includes("STU") || idInput.includes("STAFF")) {
      setVerificationResult("granted");
    } else {
      setVerificationResult("denied");
    }
  };

  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Entries</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-success">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Vehicles</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">189</div>
            <p className="text-xs text-muted-foreground">Active today</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Access Granted</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">242</div>
            <p className="text-xs text-success">98% success rate</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-destructive">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Live Gate Feed */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              Live Gate Feed - Gate 1
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/20" />
              <div className="relative z-10 text-center space-y-2">
                <Camera className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-sm text-muted-foreground">CCTV Camera Feed</p>
              </div>
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-md">
                <p className="text-xs text-muted-foreground">Detected Plate:</p>
                <p className="font-mono font-bold text-primary">{detectedPlate}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                </span>
                Live
              </span>
              <span className="text-muted-foreground">Gate 1 - Main Entrance</span>
            </div>
          </CardContent>
        </Card>

        {/* ID Verification */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>ID Card Verification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter or scan ID number..."
                value={idInput}
                onChange={(e) => setIdInput(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleVerification} className="gap-2">
                <Search className="h-4 w-4" />
                Verify
              </Button>
            </div>

            {verificationResult && (
              <div
                className={`p-6 rounded-lg text-center space-y-3 ${
                  verificationResult === "granted"
                    ? "bg-gradient-success"
                    : "bg-destructive"
                }`}
              >
                {verificationResult === "granted" ? (
                  <>
                    <CheckCircle2 className="h-16 w-16 text-white mx-auto" />
                    <h3 className="text-2xl font-bold text-white">Access Granted</h3>
                    <p className="text-white/90">Welcome to campus</p>
                  </>
                ) : (
                  <>
                    <XCircle className="h-16 w-16 text-white mx-auto" />
                    <h3 className="text-2xl font-bold text-white">Access Denied</h3>
                    <p className="text-white/90">Unauthorized ID</p>
                  </>
                )}
              </div>
            )}

            {!verificationResult && (
              <div className="p-8 bg-muted/30 rounded-lg text-center">
                <p className="text-muted-foreground">
                  Enter an ID number to verify access
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Try: STU-2024-001 or STAFF-2024-045
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Logs */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Access Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Vehicle Number</TableHead>
                <TableHead>ID Number</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.time}</TableCell>
                  <TableCell>{log.name}</TableCell>
                  <TableCell className="font-mono text-sm">{log.vehicleNumber}</TableCell>
                  <TableCell className="font-mono text-sm">{log.idNumber}</TableCell>
                  <TableCell>
                    {log.status === "granted" ? (
                      <Badge variant="default" className="bg-success">
                        Granted
                      </Badge>
                    ) : (
                      <Badge variant="destructive">Denied</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Alerts Section */}
      <Card className="shadow-card border-warning">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Security Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
            <div className="flex-1">
              <p className="font-medium">Unauthorized vehicle detected</p>
              <p className="text-sm text-muted-foreground">
                Vehicle KA-03-EF-9012 attempted entry at 10:15 AM - Gate 1
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
