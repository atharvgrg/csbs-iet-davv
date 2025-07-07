import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Faculty() {
  // Check if applications are still open (until July 15, 2025)
  const applicationDeadline = new Date("2025-07-15");
  const currentDate = new Date();
  const applicationsOpen = currentDate <= applicationDeadline;
  const applicationUrl =
    "https://davv.mponline.gov.in/Portal/Services/DAVV/Entrance/NON_CET/Admission_Entrance_Form.aspx";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground">CSBS</div>
                  <div className="text-xs text-muted-foreground">
                    IET DAVV Indore
                  </div>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/#programs"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Programs
              </Link>
              <Link
                to="/#resources"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Resources
              </Link>
              <Link
                to="/contributors"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contributors
              </Link>
              <Link
                to="/faculty"
                className="text-sm font-medium text-foreground"
              >
                Faculty
              </Link>
              <Link
                to="/#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About IET
              </Link>
              {applicationsOpen ? (
                <Button asChild>
                  <a
                    href={applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </Button>
              ) : (
                <Button disabled variant="secondary">
                  Applications Closed
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit mx-auto">
              Faculty Directory
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Meet Our Expert Faculty
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our distinguished faculty at IET DAVV combines academic excellence
              with industry experience from TCS partnership to deliver
              cutting-edge CSBS education.
            </p>
          </div>

          <Card className="border-0 bg-muted/50">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Faculty Information Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We're preparing detailed faculty profiles and information.
                  Please check back soon or contact our department for immediate
                  assistance.
                </p>
                <Button asChild>
                  <Link to="/">Return to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
