import { FC } from "react";
import classnames from "classnames";
import { TCourse } from "../types";
import { ALL_THEMES_COURSE_NAME } from "../constants";

type CoursesListProps = {
  courses: TCourse[];
  courseFilter: string;
};

export const CoursesList: FC<CoursesListProps> = ({
  courses,
  courseFilter,
}) => {
  const useCoursesFilter = () => {
    if (courseFilter === ALL_THEMES_COURSE_NAME) return courses;

    return courses.filter((course) =>
      course.tags.some((tag) => tag === courseFilter)
    );
  };

  return (
    <div className="courses__menu">
      <ul className="courses__menu-list">
        {useCoursesFilter().map((course: TCourse) => (
          <li key={course.id} className="courses__menu-item">
            <div
              className="item__image-wrapper"
              style={{ backgroundColor: course.bgColor }}
            >
              <img
                className="item-image"
                src={course.image}
                alt="course-image"
              />
            </div>

            <div className="item-title">{course.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
