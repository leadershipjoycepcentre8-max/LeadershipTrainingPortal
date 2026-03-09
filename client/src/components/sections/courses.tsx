import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, UserCheck, MessageCircle, Users, HandHeart, Baby } from "lucide-react";

type Course = {
  id: string;
  title: string;
  type: string;
  description: string;
  certification: string;
  category: "professional" | "youth" | "parents" | "children";
  icon?: any;
};

const courses: Course[] = [
  // PROFESSIONAL COURSES
  {
    id: "hiv-counselling",
    title: "HIV (VCT) Counselling and Testing",
    type: "Short Course",
    description:
      "Professional training in HIV counselling and testing procedures, following national guidelines and best practices.",
    certification: "Certificate",
    category: "professional",
    icon: Heart,
  },
  {
    id: "adherence-counselling",
    title: "Adherence Counselling",
    type: "Certificate Course",
    description:
      "Specialized training in adherence counselling techniques for chronic disease management.",
    certification: "Certificate",
    category: "professional",
    icon: UserCheck,
  },
  {
    id: "diploma-counselling",
    title: "Diploma in Counselling",
    type: "Diploma Program",
    description:
      "Comprehensive counselling program covering theory, practice, and ethics in professional counselling.",
    certification: "Diploma",
    category: "professional",
    icon: MessageCircle,
  },
  {
    id: "primary-guidance",
    title: "Primary Guidance",
    type: "Certificate Course",
    description:
      "Training in primary school guidance and counselling techniques for educational settings.",
    certification: "Certificate",
    category: "professional",
    icon: Users,
  },
  {
    id: "sign-language",
    title: "Kenya Sign Language",
    type: "Certificate Course",
    description:
      "Professional training in Kenya Sign Language for inclusive communication and accessibility.",
    certification: "Certificate",
    category: "professional",
    icon: HandHeart,
  },
  {
    id: "ecde",
    title: "ECDE (Early Childhood Development & Education)",
    type: "Certificate & Diploma",
    description:
      "Early Childhood Development and Education program for aspiring early childhood educators.",
    certification: "Certificate/Diploma",
    category: "professional",
    icon: Baby,
  },

  // TEENS & YOUTH
  {
    id: "self-awareness",
    title: "Self Awareness",
    type: "Teens & Youth Program",
    description:
      "Helping youth understand their emotions, identity, and personal growth.",
    certification: "Workshop",
    category: "youth",
  },
  {
    id: "behaviour-change",
    title: "Behaviour Change in Sexual Behaviours",
    type: "Teens & Youth Program",
    description:
      "Education focused on healthy behaviour choices and responsible relationships.",
    certification: "Workshop",
    category: "youth",
  },
  {
    id: "healthy-relationships",
    title: "Navigating Healthy Relationships",
    type: "Teens & Youth Program",
    description:
      "Helping young people build respectful and healthy relationships.",
    certification: "Workshop",
    category: "youth",
  },
  {
    id: "drugs-awareness",
    title: "Drugs Are Not Your Friends",
    type: "Teens & Youth Program",
    description:
      "Awareness program about drug abuse and its effects on youth.",
    certification: "Workshop",
    category: "youth",
  },
  {
    id: "singing-dancing",
    title: "Singing and Dancing",
    type: "Teens & Youth Program",
    description:
      "Creative arts program encouraging expression through music and dance.",
    certification: "Workshop",
    category: "youth",
  },
  {
    id: "godly-youth",
    title: "A Godly Youth",
    type: "Teens & Youth Program",
    description:
      "Building spiritual values and leadership among young people.",
    certification: "Workshop",
    category: "youth",
  },
  {
    id: "adult-child-alcoholic",
    title: "Adult Child of an Alcoholic Family",
    type: "Teens & Youth Program",
    description:
      "Understanding emotional effects of growing up in alcoholic families.",
    certification: "Workshop",
    category: "youth",
  },
  {
    id: "navigating-campus",
    title: "Navigating Campus",
    type: "Teens & Youth Program",
    description:
      "Preparing youth for campus life and independence.",
    certification: "Workshop",
    category: "youth",
  },
  {
    id: "overcomer",
    title: "Overcomer",
    type: "Teens & Youth Program",
    description:
      "Helping youth overcome personal struggles and build resilience.",
    certification: "Workshop",
    category: "youth",
  },

  // PARENTS PROGRAMS
  {
    id: "unfinished-childhood",
    title: "The Unfinished Business of Childhood",
    type: "Parents Program",
    description:
      "Helping parents understand unresolved childhood issues affecting parenting.",
    certification: "Workshop",
    category: "parents",
  },
  {
    id: "developmental-stages",
    title: "Developmental Stages",
    type: "Parents Program",
    description:
      "Understanding stages of child growth and psychological development.",
    certification: "Workshop",
    category: "parents",
  },
  {
    id: "poisonous-pedagogy",
    title: "Poisonous Pedagogy",
    type: "Parents Program",
    description:
      "Understanding harmful parenting styles and their effects.",
    certification: "Workshop",
    category: "parents",
  },
  {
    id: "good-parenting",
    title: "Good Parenting Skills",
    type: "Parents Program",
    description:
      "Practical parenting skills for raising confident children.",
    certification: "Workshop",
    category: "parents",
  },
  {
    id: "teenager-world",
    title: "The World of a Teenager and Youth Today",
    type: "Parents Program",
    description:
      "Helping parents understand modern teenage challenges.",
    certification: "Workshop",
    category: "parents",
  },
  {
    id: "art-play-therapy",
    title: "Art Play Therapy and Expressive Arts",
    type: "Parents Program",
    description:
      "Using art and play therapy to support emotional development.",
    certification: "Workshop",
    category: "parents",
  },
  {
    id: "basic-counselling",
    title: "Basic Counselling Skills",
    type: "Parents Program",
    description:
      "Training parents in basic counselling and listening skills.",
    certification: "Workshop",
    category: "parents",
  },

  // CHILDREN PROGRAMS
  {
    id: "bible-trivia",
    title: "Bible Trivia",
    type: "Children Program",
    description: "Fun Bible learning activities for children.",
    certification: "Workshop",
    category: "children",
  },
  {
    id: "children-dancing",
    title: "Dancing and Singing",
    type: "Children Program",
    description: "Creative music and dance sessions for children.",
    certification: "Workshop",
    category: "children",
  },
  {
    id: "art-play",
    title: "Art Play and Expressive Arts",
    type: "Children Program",
    description: "Creative art activities to develop imagination.",
    certification: "Workshop",
    category: "children",
  },
  {
    id: "ideal-self",
    title: "Ideal Self",
    type: "Children Program",
    description: "Helping children develop confidence and self-identity.",
    certification: "Workshop",
    category: "children",
  },
  {
    id: "social-media",
    title: "Social Media and Its Effects",
    type: "Children Program",
    description:
      "Teaching children about safe and responsible technology use.",
    certification: "Workshop",
    category: "children",
  },
  {
    id: "right-brain",
    title: "Engage the Right Brain",
    type: "Children Program",
    description:
      "Activities designed to stimulate creativity and imagination.",
    certification: "Workshop",
    category: "children",
  },
  {
    id: "addictive-behaviours",
    title: "Addictive Behaviours Awareness",
    type: "Children Program",
    description:
      "Teaching children about habits and healthy choices.",
    certification: "Workshop",
    category: "children",
  },
  {
    id: "wrong-behaviours",
    title: "Understanding Wrong Behaviours",
    type: "Children Program",
    description:
      "Helping children understand consequences of wrong behaviour.",
    certification: "Workshop",
    category: "children",
  },
];

function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {courses.map((course) => (
        <Card key={course.id} className="hover:shadow-xl transition">

          <CardHeader>
            <h3 className="text-lg font-semibold text-college-dark">
              {course.title}
            </h3>
            <p className="text-sm text-college-gray">{course.type}</p>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-college-gray mb-4">
              {course.description}
            </p>

            <Button className="bg-college-green text-white hover:bg-green-600 w-full">
              Apply Now
            </Button>
          </CardContent>

        </Card>
      ))}
    </div>
  );
}

export default function Courses() {

  const professional = courses.filter(c => c.category === "professional");
  const youth = courses.filter(c => c.category === "youth");
  const parents = courses.filter(c => c.category === "parents");
  const children = courses.filter(c => c.category === "children");

  return (
    <section id="courses" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-college-dark mb-4">
            Our Courses
          </h2>

          <p className="text-xl text-college-gray max-w-3xl mx-auto">
            Professional training and empowerment programs for individuals,
            youth, parents and children.
          </p>
        </div>

        <Tabs defaultValue="professional">

          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-10">

            <TabsTrigger value="professional">
              Professional
            </TabsTrigger>

            <TabsTrigger value="youth">
              Youth
            </TabsTrigger>

            <TabsTrigger value="parents">
              Parents
            </TabsTrigger>

            <TabsTrigger value="children">
              Children
            </TabsTrigger>

          </TabsList>

          <TabsContent value="professional">
            <CourseGrid courses={professional} />
          </TabsContent>

          <TabsContent value="youth">
            <CourseGrid courses={youth} />
          </TabsContent>

          <TabsContent value="parents">
            <CourseGrid courses={parents} />
          </TabsContent>

          <TabsContent value="children">
            <CourseGrid courses={children} />
          </TabsContent>

        </Tabs>

      </div>

    </section>
  );
}