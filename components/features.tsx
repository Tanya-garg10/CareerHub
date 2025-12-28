import { Briefcase, GraduationCap, Lightbulb, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      id: 1,
      icon: Briefcase,
      title: "Latest Job Postings",
      description:
        "Browse hundreds of recently posted job opportunities updated in real-time from top companies worldwide.",
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "Scholarship Opportunities",
      description: "Discover and apply for scholarships that match your profile. Get funded for your education today.",
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Internship Programs",
      description:
        "Access exclusive internship programs to gain real-world experience and build your professional network.",
    },
    {
      id: 4,
      icon: MapPin,
      title: "Smart Location Matching",
      description: "Filter by location, remote options, or relocation opportunities that suit your career preferences.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-pretty">
            Everything you need to advance your career
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From jobs to scholarships and internships, we've got you covered with tools designed for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.id}
                className={`p-8 glassmorphic border-foreground/10 spotlight-card hover-card scale-in`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-foreground/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
