import React, { useState } from "react";

type Course = {
  id: number;
  name: string;
  description: string;
  duration: string;
  fee: string;
  category: string;
};

const mockCourses: Course[] = [
  {
    id: 1,
    name: "Nutrition and Dietetics",
    description: "Professional nutrition and dietary planning",
    duration: "10 months",
    fee: "KES 35,000",
    category: "Health",
  },

  {
    id: 2,
    name: "Teens & Youth Self Awareness",
    description: "Self awareness training by Joyce Ngue",
    duration: "2 weeks",
    fee: "KES 5,000",
    category: "Youth",
  },

  {
    id: 3,
    name: "Behaviour Change in Sexual Behaviours",
    description: "Training by Rebecca Sport",
    duration: "2 weeks",
    fee: "KES 5,000",
    category: "Youth",
  },

  {
    id: 4,
    name: "Navigating Healthy Relationships",
    description: "Guidance on building strong relationships",
    duration: "2 weeks",
    fee: "KES 4,000",
    category: "Youth",
  },

  {
    id: 5,
    name: "Drugs Are Not Your Friends",
    description: "Drug awareness and prevention program",
    duration: "1 week",
    fee: "KES 3,000",
    category: "Youth",
  },

  {
    id: 6,
    name: "Singing and Dancing",
    description: "Creative arts program for teens",
    duration: "1 month",
    fee: "KES 4,000",
    category: "Talent",
  },
];

export default function AdminCourses() {
  const [courses] = useState<Course[]>(mockCourses);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>Courses</h1>

      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "300px",
        }}
      />

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Fee</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {filteredCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.duration}</td>
              <td>{course.fee}</td>
              <td>{course.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}