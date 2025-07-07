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
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Papers() {
  // Check if applications are still open (until July 15, 2025)
  const applicationDeadline = new Date("2025-07-15");
  const currentDate = new Date();
  const applicationsOpen = currentDate <= applicationDeadline;
  const applicationUrl =
    "https://davv.mponline.gov.in/Portal/Services/DAVV/Entrance/NON_CET/Admission_Entrance_Form.aspx";

  const examTypes = [
    {
      type: "MST (Mid Semester Test)",
      description: "3 MSTs conducted, best 2 considered",
      duration: "1.5 hours",
      marks: "20 each (Total: 40)",
      papers: 24,
      weight: "40% of total marks",
    },
    {
      type: "End Semester",
      description: "Final semester examinations",
      duration: "3 hours",
      marks: "60",
      papers: 18,
      weight: "60% of total marks",
    },
    {
      type: "Sessional",
      description: "Class tests and assignments",
      duration: "1 hour",
      marks: "Varies",
      papers: 36,
      weight: "Internal assessment",
    },
    {
      type: "TCS Assessment",
      description: "Industry-specific evaluations",
      duration: "2 hours",
      marks: "100",
      papers: 12,
      weight: "Separate evaluation",
    },
  ];

  const driveLink =
    "https://drive.google.com/drive/folders/1dltzniRbeR2vK4iOlXeIPGMU8cq1ioko"; // Papers drive folder

  const batchInfo = [
    {
      batch: "2024-28",
      currentSem: 2,
      completedExams: 28,
      upcomingExams: 12,
      description: "Inaugural batch - More exam papers available",
    },
    {
      batch: "2025-29",
      currentSem: 1,
      completedExams: 8,
      upcomingExams: 6,
      description: "Current batch - Limited papers available",
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
              <Link
                to="/notes"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Notes
              </Link>
              <Link
                to="/papers"
                className="text-sm font-medium text-foreground"
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
                <BookOpen className="w-3 h-3 mr-1" />
                Examination Papers
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">
                Previous Year Papers
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access previous examination papers, sample tests, and TCS
                assessments for comprehensive exam preparation.
              </p>
            </div>

            {/* Examination Structure */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Examination Structure (Total: 100 Marks)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">MST Component (40 Marks)</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• 3 Mid Semester Tests conducted</div>
                      <div>• Each MST: 20 marks</div>
                      <div>• Best 2 MSTs considered</div>
                      <div>• Total MST weight: 40 marks</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">End Semester (60 Marks)</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• Final comprehensive exam</div>
                      <div>• Duration: 3 hours</div>
                      <div>• Covers entire syllabus</div>
                      <div>• Total weight: 60 marks</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exam Types Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {examTypes.map((exam, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{exam.type}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exam.description}
                    </p>
                    <div className="space-y-1 text-sm">
                      <div>Duration: {exam.duration}</div>
                      <div>Marks: {exam.marks}</div>
                      <div className="text-xs text-muted-foreground">
                        {exam.weight}
                      </div>
                      <Badge variant="outline" className="mt-2">
                        {exam.papers} Papers
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Batch Tabs */}
            <Tabs defaultValue="2024-28" className="w-full">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar with batch info */}
                <div className="lg:w-80 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Batch Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {batchInfo.map((info, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{info.batch}</span>
                            <Badge
                              variant={
                                info.batch === "2025-29"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              Sem {info.currentSem}
                            </Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Completed Exams:</span>
                              <span className="font-medium">
                                {info.completedExams}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Upcoming Exams:</span>
                              <span className="font-medium">
                                {info.upcomingExams}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                          <Separator />
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Exam Schedule
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Next Mid Sem:</span>
                          <span className="font-medium">Mar 15, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span>End Sem:</span>
                          <span className="font-medium">May 10, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TCS Assessment:</span>
                          <span className="font-medium">Apr 5, 2025</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Main content area */}
                <div className="flex-1">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="2024-28" className="text-sm">
                      Batch 2024-28 (Senior)
                    </TabsTrigger>
                    <TabsTrigger value="2025-29" className="text-sm">
                      Batch 2025-29 (Current)
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="2024-28" className="space-y-6">
                    <Card className="text-center p-8">
                      <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-semibold mb-4">
                        Batch 2024-28 Papers
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Comprehensive collection from the inaugural batch (72
                        students).
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

                  <TabsContent value="2025-29" className="space-y-6">
                    <Card className="text-center p-8">
                      <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-semibold mb-4">
                        Batch 2025-29 Papers
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Current batch papers - Collection growing as exams are
                        conducted (75 students).
                      </p>
                      <Badge className="mb-6">Semester 1 - Current</Badge>
                      <div className="space-y-4">
                        <div className="text-sm text-muted-foreground">
                          Papers will be available after examinations are
                          conducted
                        </div>
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
