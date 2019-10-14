import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Topnav from './components/Topnav'
import Sidebar from './components/Sidebar'

//Academics
import CoursesOffered from './components/Pages/Academics/CoursesOffered'

//Student
import CourseGrades from './components/Pages/Student/CourseGrades'
import AttendanceData from './components/Pages/Student/AttendanceData';
import GradeAssociation from './components/Pages/Student/GradeAssociation';
import CourseGradingStandards from './components/Pages/Student/CourseGradingStandards';
import CourseInternalAssessment from './components/Pages/Student/CourseInternalAssessment';
import ClassEnrollmentActivity from './components/Pages/Student/ClassEnrollmentActivity';
import StreamEnrollmentActivity from './components/Pages/Student/StreamEnrollmentActivity';
import CourseEnrollmentActivity from './components/Pages/Student/CourseEnrollmentActivity';
import People from './components/Pages/People/People';
import PeopleInformation from './components/Pages/People/PeopleInformation';
import PeopleInformationSlug from './components/Pages/People/PeopleInformationSlug';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Topnav />
      <div class="container-fluid">
        <div class="row">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/student/course-grades" component={CourseGrades} />
            <Route path="/student/attendance-data" component={AttendanceData} />
            <Route path="/student/grade-association" component={GradeAssociation} />
            <Route path="/student/course-grading-standards" component={CourseGradingStandards} />
            <Route path="/student/course-internal-assessment" component={CourseInternalAssessment} />
            <Route path="/student/class-enrollment-activity" component={ClassEnrollmentActivity} />
            <Route path="/student/stream-enrollment-activity" component={StreamEnrollmentActivity} />
            <Route path="/student/course-enrollment-activity" component={CourseEnrollmentActivity} />
            <Route exact path="/people" component={People} />
            <Route path="/people/information" component={PeopleInformation} />
            <Route path="/people/information-slug" component={PeopleInformationSlug} />
            <Route path="/academics/courses-offered" component={CoursesOffered} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
