import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

type Course = {
  id: number;
  title: string;
  category: string;
  description?: string;
};

function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {courses.map((course) => (
        <Card key={course.id} className="hover:shadow-xl transition">

          <CardHeader>
            <h3 className="text-lg font-semibold text-college-dark">
              {course.title}
            </h3>
          </CardHeader>

          <CardContent>

            <p className="text-sm text-college-gray mb-4">
              {course.description || "Professional training program designed to equip learners with practical skills."}
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

  const { data: courses = [] } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const professional = courses.filter((c) => c.category === "professional");
  const youth = courses.filter((c) => c.category === "youth");
  const parents = courses.filter((c) => c.category === "parents");
  const children = courses.filter((c) => c.category === "children");

  return (
    <section id="courses" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold text-college-dark mb-4">
            Our Courses
          </h2>

          <p className="text-xl text-college-gray max-w-3xl mx-auto">
            Professional training and empowerment programs for individuals, youth, parents and children.
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
