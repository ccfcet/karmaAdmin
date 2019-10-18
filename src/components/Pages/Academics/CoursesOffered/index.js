import React, { useState, useEffect } from 'react';
import axios from 'axios';

let api_root = process.env.REACT_APP_API_ROOT

function CoursesOffered() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(api_root + 'public/academics/courses_offered')
    .then(response => {
      console.log(response.data.classes)
      setData(response.data.classes)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  let content = data.map((item, key) => {
    return(
        <tr>
          <td>{item.id}</td>
          <td>{item.official_course_id}</td>
          <td>{item.name}</td>
          <td>{item.department_id}</td>
          <td>{item.credits}</td>
          <td>{item.valid_start_date}</td>
          <td>{item.valid_end_date}</td>
          <td>{item.duration_in_days}</td>
          {/* <td><i class="fa fa-pencil edit-icon"></i><i class="fa fa-minus-circle delete-icon"></i></td> */}
        </tr>
    )
  })

  function handlePost(e) {
    e.preventDefault();
    let newData = {
      'officialCourseId': e.target.officialCourseId.value,
      'name': e.target.name.value,
      'departmentId': e.target.departmentId.value,
      'credits': e.target.credits.value,
      'validStartDate': e.target.validStartDate.value,
      'validEndDate': e.target.validEndDate.value,
      'durationInDays': e.target.durationInDays.value,
    }
    axios.post(api_root + 'public/academics/courses_offered', newData)
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
    
  }

  return (
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <h3 class="content-head">Courses Offered</h3>
      <div class="table-responsive">
        <div class="btn-container text-right">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#insertModal"><i class="fa fa-plus-circle add-button"></i> Insert</button> 
        </div>
        
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>ID</th>
              <th>Official Course ID</th>
              <th>Name</th>
              <th>Deparment ID</th>
              <th>Credits</th>
              <th>Valid Start Date</th>
              <th>Valid End Date</th>
              <th>Duration in Days</th>
            </tr>
          </thead>
          <tbody>
            <>
              {content}
            </>
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
      </div>
      {/* INSERT MODAL */}
      <div class="modal fade" id="insertModal" tabindex="-1" role="dialog" aria-labelledby="insertModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="insertModalLabel">Insert into Courses Offered</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form onSubmit={handlePost}>
              <div class="form-group row">
                <label for="input2" class="col-sm-2 col-form-label">Official Course ID</label>
                <div class="col-sm-10">
                  <input type="text" name="officialCourseId" class="form-control" id="input2" placeholder="Official Course ID" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input3" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" name="name" class="form-control" id="input3" placeholder="Name" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input4" class="col-sm-2 col-form-label">Department ID</label>
                <div class="col-sm-10">
                  <input type="text" name="departmentId" class="form-control" id="input4" placeholder="Department ID" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input4" class="col-sm-2 col-form-label">Credits</label>
                <div class="col-sm-10">
                  <input type="text" name="credits" class="form-control" id="input4" placeholder="Credits" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input5" class="col-sm-2 col-form-label">Valid Start Date</label>
                <div class="col-sm-10">
                  <input type="text" name="validStartDate" class="form-control" id="input5" placeholder="Valid Start Date" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input6" class="col-sm-2 col-form-label">Valid End Date</label>
                <div class="col-sm-10">
                  <input type="text" name="validEndDate" class="form-control" id="input6" placeholder="Valid End Date" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input7" class="col-sm-2 col-form-label">Duration in Days</label>
                <div class="col-sm-10">
                  <input type="text" name="durationInDays" class="form-control" id="input7" placeholder="Duration in Days" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                      <input type="submit" class="btn btn-outline-success" value="Insert"/>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
      {/* EDIT MODAL */}
      <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="insertModalLabel">Insert into Courses Offered</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form>
              <div class="form-group row">
                <label for="input2" class="col-sm-2 col-form-label">Official Course ID</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="input2" placeholder="Official Course ID" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input3" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="input3" placeholder="Name" />
                </div>
              </div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <script>

    </script>
    </main>
  );
}

export default CoursesOffered;
