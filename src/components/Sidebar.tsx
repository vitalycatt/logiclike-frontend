import { FC } from "react";
import classnames from "classnames";
import { COURSE_FILTER } from "../constants";

type SidebarProps = {
  courseFilter: string;
  setCourseFilter: React.Dispatch<React.SetStateAction<string>>;
};

type SidebarItemProps = {
  courseName: string;
  courseFilter: string;
  setCourseFilter: React.Dispatch<React.SetStateAction<string>>;
};

const SidebarItem: FC<SidebarItemProps> = ({
  courseName,
  courseFilter,
  setCourseFilter,
}) => (
  <li
    className={classnames("courses__sidebar-item", {
      active: courseFilter === courseName,
    })}
    onClick={() => {
      setCourseFilter(courseName);
      window.localStorage.setItem(COURSE_FILTER, courseName);
    }}
  >
    {courseName}
  </li>
);

export const Sidebar: FC<SidebarProps> = ({
  courseFilter,
  setCourseFilter,
}) => {
  return (
    <div className="courses__sidebar">
      <ul className="courses__sidebar-list">
        <SidebarItem
          courseName="Все темы"
          courseFilter={courseFilter}
          setCourseFilter={setCourseFilter}
        />

        <SidebarItem
          courseName="Логика и мышление"
          courseFilter={courseFilter}
          setCourseFilter={setCourseFilter}
        />

        <SidebarItem
          courseName="Загадки"
          courseFilter={courseFilter}
          setCourseFilter={setCourseFilter}
        />

        <SidebarItem
          courseName="Головоломки"
          courseFilter={courseFilter}
          setCourseFilter={setCourseFilter}
        />

        <SidebarItem
          courseName="Путешествия"
          courseFilter={courseFilter}
          setCourseFilter={setCourseFilter}
        />
      </ul>
    </div>
  );
};
