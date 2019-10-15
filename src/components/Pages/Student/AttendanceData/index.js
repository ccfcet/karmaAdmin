import React from 'react';

function AttendanceData() {
  return (
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <h3 class="content-head">Attendance Data</h3>
      <div class="table-responsive">
        <div class="btn-container text-right">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#insertModal"><i class="fa fa-plus-circle add-button"></i> Insert</button> 
        </div>
        
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>ID</th>
              <th>Student ID</th>
              <th>Course ID</th>
              <th>Faculty ID</th>
              <th>Start Date Time</th>
              <th>End Date Time</th>
              <th>Value</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>dolor</td>
              <td>dolor</td>
              <td><i class="fa fa-pencil edit-icon"></i><i class="fa fa-minus-circle delete-icon"></i></td>
            </tr>
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
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
      </div>
      <div class="modal fade" id="insertModal" tabindex="-1" role="dialog" aria-labelledby="insertModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="insertModalLabel">Insert into Attendance Data</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form>
              <div class="form-group row">
                <label for="input2" class="col-sm-2 col-form-label">Student ID</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="input2" placeholder="Student ID" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input3" class="col-sm-2 col-form-label">Course ID</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="input3" placeholder="Course ID" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input4" class="col-sm-2 col-form-label">Faculty ID</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="input4" placeholder="Faculty ID" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input4" class="col-sm-2 col-form-label">Start Date Time</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="input4" placeholder="Start Date Time" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input5" class="col-sm-2 col-form-label">End Date Time</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="input5" placeholder="End Date Time" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input6" class="col-sm-2 col-form-label">Value</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="input6" placeholder="Value" />
                </div>
              </div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-success">Insert</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AttendanceData;
