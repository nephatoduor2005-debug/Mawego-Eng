const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    code: "CS101",
    instructor: "John Doe",
    grade: "A",
  },
  {
    id: 2,
    title: "Database Management Systems",
    code: "CS205",
    instructor: "Jane Smith",
    grade: "B+",
  },
  {
    id: 3,
    title: "Data Structures and Algorithms",
    code: "CS301",
    instructor: "Peter Jones",
    grade: "A-",
  },
];

export default function MyCourses() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-400 mb-2">{course.code} - {course.instructor}</p>
            <p className="text-gray-300">Grade: {course.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
