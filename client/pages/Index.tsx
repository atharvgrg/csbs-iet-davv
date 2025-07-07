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
  Code,
  Database,
  Brain,
  Building2,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  ChevronRight,
  Globe,
  Briefcase,
  Laptop,
  FileText,
  Download,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  // Check if applications are still open (until July 15, 2025)
  const applicationDeadline = new Date("2025-07-15");
  const currentDate = new Date();
  const applicationsOpen = currentDate <= applicationDeadline;
  const applicationUrl =
    "https://davv.mponline.gov.in/Portal/Services/DAVV/Entrance/NON_CET/Admission_Entrance_Form.aspx";

  const programs = [
    {
      title: "Core Computer Science",
      description: "Advanced algorithms, data structures, software engineering",
      icon: Code,
      courses: [
        "Data Structures",
        "Algorithms",
        "Software Engineering",
        "Computer Networks",
      ],
    },
    {
      title: "Cyber Security",
      description: "Information security, network security, ethical hacking",
      icon: Building2,
      courses: [
        "Network Security",
        "Ethical Hacking",
        "Cryptography",
        "Security Analytics",
      ],
    },
    {
      title: "Machine Learning & AI",
      description:
        "Artificial intelligence, deep learning, pattern recognition",
      icon: Brain,
      courses: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "AI Applications",
      ],
    },
    {
      title: "Cloud & IoT",
      description: "Cloud computing, Internet of Things, distributed systems",
      icon: Database,
      courses: [
        "Cloud Computing",
        "IoT Systems",
        "Edge Computing",
        "Microservices",
      ],
    },
  ];

  const features = [
    {
      icon: Building2,
      title: "TCS Partnership",
      description:
        "Curriculum designed by TCS industry experts for future-ready skills",
    },
    {
      icon: GraduationCap,
      title: "IET DAVV Legacy",
      description:
        "Part of the prestigious DAVV university since 1996 with strong academics",
    },
    {
      icon: Globe,
      title: "Emerging Technologies",
      description:
        "Focus on Cyber Security, Machine Learning, Cloud Computing, and IoT",
    },
    {
      icon: Award,
      title: "Industry Placement",
      description:
        "Strong placement record with companies like TCS, Infosys, Accenture, HCL",
    },
  ];

  const stats = [
    { number: "75", label: "Total Seats" },
    { number: "2024", label: "Program Launch" },
    { number: "JEE", label: "Entrance Exam" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground">CSBS</div>
                  <div className="text-xs text-muted-foreground">
                    IET DAVV Indore
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#programs"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Programs
              </a>
              <a
                href="#resources"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Resources
              </a>
              <Link
                to="/contributors"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contributors
              </Link>
              <a
                href="/faculty"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Faculty
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About IET
              </a>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Laptop className="w-3 h-3 mr-1" />
                  TCS Industry Partnership
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Computer Science &{" "}
                  <span className="text-primary">Business Systems</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  A pioneering B.Tech program at IET DAVV Indore, designed in
                  collaboration with TCS. Bridge technology and business for
                  tomorrow's digital economy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {applicationsOpen ? (
                  <Button size="lg" className="text-base" asChild>
                    <a
                      href={applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now - Deadline July 15
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="text-base"
                    disabled
                    variant="secondary"
                  >
                    Applications Closed
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
                <Button variant="outline" size="lg" className="text-base">
                  Explore Program
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-xl bg-background/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center mx-auto">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Future-Ready Skills
                    </h3>
                    <p className="text-white/80">
                      Combining cutting-edge technology with business
                      intelligence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Why Choose CSBS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Excellence in Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our unique approach combines technical depth with business acumen,
              preparing you for leadership roles in the digital economy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Academic Resources
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Study Materials & Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive study materials, notes, and test papers
              curated for CSBS students.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Lecture Notes</CardTitle>
                <CardDescription>
                  Comprehensive notes for all CSBS subjects organized by
                  semester
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/notes">
                    <Download className="w-4 h-4 mr-2" />
                    Browse Notes
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Previous Papers</CardTitle>
                <CardDescription>
                  Past examination papers and sample tests for practice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/papers">
                    <Download className="w-4 h-4 mr-2" />
                    Download Papers
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Syllabus & Schedule</CardTitle>
                <CardDescription>
                  Complete syllabus outline and academic calendar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  View Syllabus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Curriculum
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Comprehensive Learning Tracks
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four specialized tracks that cover the entire spectrum of computer
              science and business systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {program.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-muted-foreground">
                      Key Courses:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {program.courses.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About IET Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Established 1996
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                About IET DAVV Indore
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  The Institute of Engineering & Technology (IET) at Devi Ahilya
                  Vishwavidyalaya was established on September 4, 1996, and has
                  been a pioneer in technical education in Madhya Pradesh.
                </p>
                <p>
                  Located on a sprawling 110-acre campus on Khandwa Road, IET
                  has grown from offering 3 programs with 90 students to
                  becoming a research center recognized by AICTE, UGC, and the
                  Government of Madhya Pradesh.
                </p>
                <p>
                  Our CSBS program, launched in 2024-25, represents our
                  commitment to evolving with industry needs through strategic
                  partnerships with organizations like TCS.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary">28</div>
                  <div className="text-sm text-muted-foreground">
                    Years of Excellence
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">110</div>
                  <div className="text-sm text-muted-foreground">
                    Acre Campus
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-0 bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">
                        Hosted IIT Indore campus (2009-10)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">
                        MoUs with NIC, RRCAT, TCS, Eicher Motors
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">
                        PhD research center recognition
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">
                        Strong industry placement record
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-gradient-to-br from-primary to-accent text-white">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Join IET DAVV's CSBS Program
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Be part of the inaugural batch of our TCS-collaborated CSBS
                  program. 75 seats available (60 + 15 supernumerary) for JEE
                  qualified candidates.
                </p>
                {applicationsOpen && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-md mx-auto">
                    <p className="text-white/90 text-sm text-center">
                      ⏰ Applications close on <strong>July 15, 2025</strong>
                    </p>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {applicationsOpen ? (
                    <Button
                      size="lg"
                      variant="secondary"
                      className="text-base"
                      asChild
                    >
                      <a
                        href={applicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply for Admission
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  ) : (
                    <div className="text-center">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="text-base"
                        disabled
                      >
                        Applications Closed
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                      <p className="text-white/70 text-sm mt-2">
                        Applications closed on July 15, 2025
                      </p>
                    </div>
                  )}
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    CSBS Department
                  </div>
                  <div className="text-xs text-muted-foreground">
                    IET DAVV Indore
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Institute of Engineering & Technology, Devi Ahilya
                Vishwavidyalaya. Pioneering technical education since 1996 with
                industry partnerships.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Undergraduate</div>
                <div>Postgraduate</div>
                <div>Research</div>
                <div>Certification</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link
                  to="/notes"
                  className="block hover:text-foreground transition-colors"
                >
                  Study Notes
                </Link>
                <Link
                  to="/papers"
                  className="block hover:text-foreground transition-colors"
                >
                  Exam Papers
                </Link>
                <Link
                  to="/contributors"
                  className="block hover:text-foreground transition-colors"
                >
                  Contributors
                </Link>
                <Link
                  to="/faculty"
                  className="block hover:text-foreground transition-colors"
                >
                  Faculty
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>iet@dauniv.ac.in</div>
                <div>+91 731 2570562</div>
                <div>Khandwa Road, Indore</div>
                <div>Madhya Pradesh - 452001</div>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <div>
              © 2024 IET DAVV Indore - CSBS Department. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-muted-foreground">
            Made with ❤️ by the batch of '28
          </div>
        </div>
      </footer>
    </div>
  );
}
