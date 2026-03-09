import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, UserCheck, MessageCircle, Users, HandHeart, Baby } from "lucide-react";

const courses = [
  // PROFESSIONAL COURSES
  {
    id: "hiv-counselling",
    title: "HIV (VCT) Counselling and Testing",
    type: "Short Course",
    description: "Professional training in HIV counselling and testing procedures, following national guidelines and best practices.",
    certification: "Certificate",
    icon: Heart,
  },
  {
    id: "adherence-counselling",
    title: "Adherence Counselling",
    type: "Certificate Course",
    description: "Specialized training in adherence counselling techniques for chronic disease management.",
    certification: "Certificate",
    icon: UserCheck,
  },
  {
    id: "diploma-counselling",
    title: "Diploma in Counselling",
    type: "Diploma Program",
    description: "Comprehensive counselling program covering theory, practice, and ethics in professional counselling.",
    certification: "Diploma",
    icon: MessageCircle,
  },
  {
    id: "primary-guidance",
    title: "Primary Guidance",
    type: "Certificate Course",
    description: "Training in primary school guidance and counselling techniques for educational settings.",
    certification: "Certificate",
    icon: Users,
  },
  {
    id: "sign-language",
    title: "Kenya Sign Language",
    type: "Certificate Course",
    description: "Professional training in Kenya Sign Language for inclusive communication and accessibility.",
    certification: "Certificate",
    icon: HandHeart,
  },
  {
    id: "ecde",
    title: "ECDE (Early Childhood Development & Education)",
    type: "Certificate & Diploma",
    description: "Early Childhood Development and Education program for aspiring early childhood educators.",
    certification: "Certificate/Diploma",
    icon: Baby,
  },

  // TEENS & YOUTH
  {
    id: "self-awareness",
    title: "Self Awareness",
    type: "Teens & Youth Program",
    description: "Helping youth understand their emotions, identity, and personal growth.",
    certification: "Workshop",
  },
  {
    id: "behaviour-change",
    title: "Behaviour Change in Sexual Behaviours",
    type: "Teens & Youth Program",
    description: "Education focused on healthy behaviour choices and responsible relationships.",
    certification: "Workshop",
  },
  {
    id: "healthy-relationships",
    title: "Navigating Healthy Relationships",
    type: "Teens & Youth Program",
    description: "Helping young people build respectful and healthy relationships.",
    certification: "Workshop",
  },
  {
    id: "drugs-awareness",
    title: "Drugs Are Not Your Friends",
    type: "Teens & Youth Program",
    description: "Awareness program about drug abuse and its effects on youth.",
    certification: "Workshop",
  },
  {
    id: "singing-dancing",
    title: "Singing and Dancing",
    type: "Teens & Youth Program",
    description: "Creative arts program encouraging expression through music and dance.",
    certification: "Workshop",
  },
  {
    id: "godly-youth",
    title: "A Godly Youth",
    type: "Teens & Youth Program",
    description: "Building spiritual values and leadership among young people.",
    certification: "Workshop",
  },
  {
    id: "adult-child-alcoholic",
    title: "Adult Child of an Alcoholic Family",
    type: "Teens & Youth Program",
    description: "Understanding emotional effects of growing up in alcoholic families.",
    certification: "Workshop",
  },
  {
    id: "navigating-campus",
    title: "Navigating Campus",
    type: "Teens & Youth Program",
    description: "Preparing youth for campus life and independence.",
    certification: "Workshop",
  },
  {
    id: "overcomer",
    title: "Overcomer",
    type: "Teens & Youth Program",
    description: "Helping youth overcome personal struggles and build resilience.",
    certification: "Workshop",
  },

  // PARENTS PROGRAMS
  {
    id: "unfinished-childhood",
    title: "The Unfinished Business of Childhood",
    type: "Parents Program",
    description: "Helping parents understand unresolved childhood issues affecting parenting.",
    certification: "Workshop",
  },
  {
    id: "developmental-stages",
    title: "Developmental Stages",
    type: "Parents Program",
    description: "Understanding stages of child growth and psychological development.",
    certification: "Workshop",
  },
  {
    id: "poisonous-pedagogy",
    title: "Poisonous Pedagogy",
    type: "Parents Program",
    description: "Understanding harmful parenting styles and their effects.",
    certification: "Workshop",
  },
  {
    id: "good-parenting",
    title: "Good Parenting Skills",
    type: "Parents Program",
    description: "Practical parenting skills for raising confident children.",
    certification: "Workshop",
  },
  {
    id: "teenager-world",
    title: "The World of a Teenager and Youth Today",
    type: "Parents Program",
    description: "Helping parents understand modern teenage challenges.",
    certification: "Workshop",
  },
  {
    id: "art-play-therapy",
    title: "Art Play Therapy and Expressive Arts",
    type: "Parents Program",
    description: "Using art and play therapy to support emotional development.",
    certification: "Workshop",
  },
  {
    id: "basic-counselling",
    title: "Basic Counselling Skills",
    type: "Parents Program",
    description: "Training parents in basic counselling and listening skills.",
    certification: "Workshop",
  },

  // CHILDREN PROGRAMS
  {
    id: "bible-trivia",
    title: "Bible Trivia",
    type: "Children Program",
    description: "Fun Bible learning activities for children.",
    certification: "Workshop",
  },
  {
    id: "children-dancing",
    title: "Dancing and Singing",
    type: "Children Program",
    description: "Creative music and dance sessions for children.",
    certification: "Workshop",
  },
  {
    id: "art-play",
    title: "Art Play and Expressive Arts",
    type: "Children Program",
    description: "Creative art activities to develop imagination.",
    certification: "Workshop",
  },
  {
    id: "ideal-self",
    title: "Ideal Self",
    type: "Children Program",
    description: "Helping children develop confidence and self-identity.",
    certification: "Workshop",
  },
  {
    id: "social-media",
    title: "Social Media and Its Effects",
    type: "Children Program",
    description: "Teaching children about safe and responsible technology use.",
    certification: "Workshop",
  },
  {
    id: "right-brain",
    title: "Engage the Right Brain",
    type: "Children Program",
    description: "Activities designed to stimulate creativity and imagination.",
    certification: "Workshop",
  },
  {
    id: "addictive-behaviours",
    title: "Addictive Behaviours Awareness",
    type: "Children Program",
    description: "Teaching children about habits and healthy choices.",
    certification: "Workshop",
  },
  {
    id: "wrong-behaviours",
    title: "Understanding Wrong Behaviours",
    type: "Children Program",
    description: "Helping children understand consequences of wrong behaviour.",
    certification: "Workshop",
  },
];

export default function Courses() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-college-dark mb-4">
            Our Courses
          </h2>
          <p className="text-xl text-college-gray max-w-3xl mx-auto">
            Professional training programs and community development workshops
            designed to empower individuals, families, and youth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;

            return (
              <Card key={course.id} className="hover:shadow-xl transition-shadow">

                <CardHeader>
                  <div className="flex items-center mb-4">
                    {IconComponent && (
                      <IconComponent className="text-college-green h-8 w-8 mr-3" />
                    )}
                    <h3 className="text-xl font-semibold text-college-dark">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-college-gray">{course.type}</p>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-college-gray mb-6">
                    {course.description}
                  </p>
                </CardContent>

                <CardFooter className="flex justify-between items-center">
                  <Badge variant="secondary" className="text-college-green">
                    {course.certification}
                  </Badge>

                  <Button
                    onClick={() => scrollToSection("admissions")}
                    className="bg-college-green text-white hover:bg-green-600"
                    size="sm"
                  >
                    Learn More
                  </Button>
                </CardFooter>

              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => scrollToSection("admissions")}
            className="bg-college-green text-white px-8 py-3 hover:bg-green-600 font-semibold"
          >
            View All Courses
          </Button>
        </div>

      </div>
    </section>
  );
}
