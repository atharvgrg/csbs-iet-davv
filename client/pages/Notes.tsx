import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  ArrowLeft,
  Download,
  FileText,
  Calendar,
  Users,
  BookOpen,
  Code,
  Database,
  Brain,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Notes() {
  // Check if applications are still open (until July 15, 2025)
  const applicationDeadline = new Date("2025-07-15");
  const currentDate = new Date();
  const applicationsOpen = currentDate <= applicationDeadline;
  const applicationUrl =
    "https://davv.mponline.gov.in/Portal/Services/DAVV/Entrance/NON_CET/Admission_Entrance_Form.aspx";

  const driveLink =
    "https://drive.google.com/drive/folders/19Nf8oa_KdmTia81fagfMWgaBm1c9ZqnK"; // Notes drive folder

  const batchInfo = [
    {
      batch: "2024-28",
      status: "Current - Semester 2",
      students: "72 Students",
      description: "Inaugural batch of CSBS program",
    },
    {
      batch: "2025-29",
      status: "Current - Semester 1",
      students: "75 Students",
      description: "Second batch with full strength",
    },
  ];

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
              <Link to="/notes" className="text-sm font-medium text-foreground">
                Notes
              </Link>
              <Link
                to="/papers"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Papers
              </Link>
              <Link
                to="/contributors"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contributors
              </Link>
              <Link
                to="/faculty"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Faculty
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                <FileText className="w-3 h-3 mr-1" />
                Study Materials
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">
                Lecture Notes Repository
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access comprehensive lecture notes for all CSBS subjects,
                organized by batch and semester.
              </p>
            </div>

            {/* Batch Tabs */}
            <Tabs defaultValue="2025-29" className="w-full">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar with batch info */}
                <div className="lg:w-80 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Batch Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {batchInfo.map((info, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{info.batch}</span>
                            <Badge
                              variant={
                                info.batch === "2025-29"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {info.status.includes("Current")
                                ? "Active"
                                : "Alumni"}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {info.status} • {info.students}
                          </div>
                          <div className="text-sm">{info.description}</div>
                          <Separator />
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Quick Stats
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Total Notes:</span>
                        <span className="font-semibold">240+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Subjects:</span>
                        <span className="font-semibold">30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Last Updated:</span>
                        <span className="font-semibold">Today</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Main content area */}
                <div className="flex-1">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="2025-29" className="text-sm">
                      Batch 2025-29 (Current)
                    </TabsTrigger>
                    <TabsTrigger value="2024-28" className="text-sm">
                      Batch 2024-28 (Senior)
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="2025-29" className="space-y-6">
                    <Card className="text-center p-8">
                      <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-semibold mb-4">
                        Batch 2025-29 Notes
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Current semester notes and study materials for the
                        latest batch (75 students).
                      </p>
                      <Badge className="mb-6">Semester 1 - Current</Badge>
                      <div className="space-y-4">
                        <div className="text-sm text-muted-foreground">
                          Notes will be available soon as the batch progresses
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="2024-28" className="space-y-6">
                    <Card className="text-center p-8">
                      <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-semibold mb-4">
                        Batch 2024-28 Notes
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Inaugural batch materials with comprehensive coverage
                        (72 students).
                      </p>
                      <Badge variant="secondary" className="mb-6">
                        Semester 2 - Senior Batch
                      </Badge>
                      <div className="space-y-4">
                        {driveLink ? (
                          <Button size="lg" asChild>
                            <a
                              href={driveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Access Drive Folder
                            </a>
                          </Button>
                        ) : (
                          <div className="text-sm text-muted-foreground">
                            Drive link will be added soon
                          </div>
                        )}
                      </div>
                    </Card>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
