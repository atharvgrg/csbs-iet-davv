import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  ArrowLeft,
  Users,
  Heart,
  FileText,
  BookOpen,
  Camera,
  Eye,
  Palette,
  Code,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contributors() {
  // Check if applications are still open (until July 15, 2025)
  const applicationDeadline = new Date("2025-07-15");
  const currentDate = new Date();
  const applicationsOpen = currentDate <= applicationDeadline;
  const applicationUrl =
    "https://davv.mponline.gov.in/Portal/Services/DAVV/Entrance/NON_CET/Admission_Entrance_Form.aspx";

  const memberProfiles = {
    "Atharv Garg": {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F6c58176954404ffd8dbe7dbab761ab04%2F9e3d78b810244a05aea4f7d55b31a840?format=webp&width=400",
      linkedin: "https://www.linkedin.com/in/atharvgrg/",
      github: "https://github.com/atharvgrg",
      batch: "CSBS Batch 2024-28",
    },
    // Other member profiles will be added here
  };

  const departments = [
    {
      name: "Notes Department",
      icon: FileText,
      description: "Curating and organizing study materials",
      members: ["Bharat Jain Sanghvi"],
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      name: "MST's & End Sem Papers",
      icon: BookOpen,
      description: "Managing examination papers and assessments",
      members: ["Advait Kshirsagar", "Gurpreet Singh Bhatia"],
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      name: "Gallery Division",
      icon: Camera,
      description: "Visual content and media management",
      members: ["Bhumi Jain", "Pranamya Sharma"],
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      name: "Overview Unit",
      icon: Eye,
      description: "Content strategy and oversight",
      members: ["Kanha Agrawal"],
      color: "bg-orange-50 text-orange-600 border-orange-200",
    },
    {
      name: "Designing Unit",
      icon: Palette,
      description: "UI/UX design and visual aesthetics",
      members: ["Suwaaq Kothari", "Naman Kasliwal"],
      color: "bg-pink-50 text-pink-600 border-pink-200",
    },
    {
      name: "Development Unit",
      icon: Code,
      description: "Website development and technical implementation",
      members: ["Atharv Garg"],
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
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
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Papers
              </Link>
              <Link
                to="/contributors"
                className="text-sm font-medium text-foreground"
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
        <div className="max-w-6xl mx-auto">
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
                <Heart className="w-3 h-3 mr-1" />
                Made by Students, For Students
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">
                Site Contributors
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated students from Batch 2024-28 who made this
                platform possible through their collaborative efforts.
              </p>
            </div>

            {/* Contributors Overview */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0">
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-semibold mb-4">
                  A Collaborative Effort
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  This website is the result of teamwork, dedication, and shared
                  vision among students of the CSBS program. Each department
                  played a crucial role in bringing this platform to life.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">9</div>
                    <div className="text-sm text-muted-foreground">
                      Contributors
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">
                      Departments
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1</div>
                    <div className="text-sm text-muted-foreground">Vision</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Departments */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                <p className="text-muted-foreground">
                  Organized into specialized departments for maximum efficiency
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {departments.map((dept, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${dept.color}`}
                        >
                          <dept.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{dept.name}</CardTitle>
                          <CardDescription>{dept.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm font-medium text-muted-foreground">
                          Team Members:
                        </div>
                        <div className="space-y-3">
                          {dept.members.map((member, memberIndex) => {
                            const profile = memberProfiles[member];
                            return (
                              <div
                                key={memberIndex}
                                className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                              >
                                <div className="flex items-center space-x-3">
                                  {profile?.image ? (
                                    <img
                                      src={profile.image}
                                      alt={member}
                                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                                    />
                                  ) : (
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                      <span className="text-sm font-semibold text-primary">
                                        {member
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </span>
                                    </div>
                                  )}
                                  <div>
                                    <div className="font-medium">{member}</div>
                                    <div className="text-xs text-muted-foreground">
                                      {profile?.batch ||
                                        (member === "Naman Kasliwal"
                                          ? "ETC Batch 2024-28"
                                          : "CSBS Batch 2024-28")}
                                    </div>
                                  </div>
                                </div>
                                {profile &&
                                  (profile.linkedin || profile.github) && (
                                    <div className="flex items-center space-x-2">
                                      {profile.linkedin && (
                                        <a
                                          href={profile.linkedin}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                                          title="LinkedIn Profile"
                                        >
                                          <Linkedin className="w-4 h-4" />
                                        </a>
                                      )}
                                      {profile.github && (
                                        <a
                                          href={profile.github}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                                          title="GitHub Profile"
                                        >
                                          <Github className="w-4 h-4" />
                                        </a>
                                      )}
                                    </div>
                                  )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Appreciation */}
            <Card className="border-0 bg-gradient-to-br from-primary to-accent text-white">
              <CardContent className="p-8 text-center">
                <Heart className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h2 className="text-2xl font-semibold mb-4">
                  Thank You to Our Contributors
                </h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  This platform exists because of the time, effort, and
                  dedication these students invested. Their collaborative spirit
                  embodies the essence of the CSBS program.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-base"
                    asChild
                  >
                    <Link to="/">
                      Explore the Platform
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base bg-white/10 border-white/20 text-white hover:bg-white/20"
                    asChild
                  >
                    <Link to="/notes">Browse Study Materials</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
