import React from 'react';
import { NavLink } from 'react-router-dom';



function Sidebar() {

  return (
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="#submenu-student" data-toggle="collapse" aria-expanded="false" aria-controls="#submenu-student">
              <span data-feather="user"></span>
              Student
            </a>
            <div class="collapse" id="submenu-student">
              <ul class="nav flex-column sublist">
                  <li class="nav-item">
                      <NavLink exact to="/student/course-grades" style={{textDecoration: 'none'}} className="nav-link">Course Grades</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink exact to="/student/attendance-data" style={{textDecoration: 'none'}} className="nav-link">Attendance Data</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink exact to="/student/grade-association" style={{textDecoration: 'none'}} className="nav-link">Grade Association</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink exact to="/student/course-grading-standards" style={{textDecoration: 'none'}} className="nav-link">Courses Grading Standards</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink exact to="/student/course-internal-assessment" style={{textDecoration: 'none'}} className="nav-link">Course Internal Assessment</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink exact to="/student/class-enrollment-activity" style={{textDecoration: 'none'}} className="nav-link">Class Enrollement Activity</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink exact to="/student/stream-enrollment-activity" style={{textDecoration: 'none'}} className="nav-link">Stream Enrollement Activity</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink exact to="/student/course-enrollment-activity" style={{textDecoration: 'none'}} className="nav-link">Course Enrollement Activity</NavLink>
                  </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#submenu-people" data-toggle="collapse" aria-expanded="false" aria-controls="#submenu-people">
              <span data-feather="users"></span>
              People
            </a>
            <div class="collapse" id="submenu-people">
              <ul class="nav flex-column sublist">
                  <li class="nav-item">
                      <NavLink exact to="/people" style={{textDecoration: 'none'}} className="nav-link">People</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink exact to="/people/information" style={{textDecoration: 'none'}} className="nav-link">Information</NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink exact to="/people/information-slug" style={{textDecoration: 'none'}} className="nav-link">Information Slug</NavLink>
                  </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#submenu-academics" data-toggle="collapse" aria-expanded="false" aria-controls="#submenu-academics">
              <span data-feather="book"></span>
              Academics
            </a>
            <div class="collapse" id="submenu-academics">
              <ul class="nav flex-column sublist">
                  <li class="nav-item">
                      <NavLink exact to="/academics/courses-offered" style={{textDecoration: 'none'}} className="nav-link">Courses Offered</NavLink>
                  </li>
              </ul>
            </div>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Sidebar;
