import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import { TCourse } from "./types";
import { Sidebar } from "./components/Sidebar";
import { CoursesList } from "./components/CoursesList";
import { ALL_THEMES_COURSE_NAME, COURSE_FILTER } from "./constants";

const storageCourseFilter = window.localStorage.getItem(COURSE_FILTER);

function App() {
  const [courses, setCourses] = useState<TCourse[] | null>();
  const [courseFilter, setCourseFilter] = useState<string>(
    storageCourseFilter || ALL_THEMES_COURSE_NAME
  );

  const getCourses = async () => {
    return await axios
      .get("https://logiclike.com/docs/courses.json")
      .then((response) => setCourses(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCourses();
  }, []);

  if (!courses) return null;

  return (
    <div className="courses">
      <Sidebar courseFilter={courseFilter} setCourseFilter={setCourseFilter} />

      <CoursesList courseFilter={courseFilter} courses={courses} />
    </div>
  );
}

export default App;
