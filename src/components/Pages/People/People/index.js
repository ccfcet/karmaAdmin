import React, { useState, useEffect } from 'react';
import axios from 'axios';

let api_root = process.env.REACT_APP_API_ROOT
function People() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(api_root + 'private/people/people')
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
          <td>{item.first_name}</td>
          <td>{item.middle_name}</td>
          <td>{item.last_name}</td>
          <td>{item.gender}</td>
          <td>{item.date_of_birth}</td>
          <td>{item.nationality}</td>
          <td><i class="fa fa-pencil edit-icon"></i><i class="fa fa-minus-circle delete-icon"></i></td>
        </tr>
    )
  })

  function handleChange(e) {
  }

  function handlePost(e) {
    e.preventDefault();
    let newData = {
      'firstName': e.target.firstName.value,
      'middleName': e.target.middleName.value,
      'lastName': e.target.lastName.value,
      'gender': e.target.gender.value,
      'dateOfBirth': e.target.dateOfBirth.value,
      'nationality': e.target.nationality.value,
    }
    axios.post(api_root + 'private/people/people', newData)
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
    
  }

  return (
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <h3 class="content-head">People</h3>
      <div class="table-responsive">
        <div class="btn-container text-right">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#insertModal"><i class="fa fa-plus-circle add-button"></i> Insert</button> 
        </div>
        
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Nationality</th>
              <th>Options</th>
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
      <div class="modal fade" id="insertModal" tabindex="-1" role="dialog" aria-labelledby="insertModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="insertModalLabel">Insert into People</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form onSubmit={handlePost}>
              <div class="form-group row">
                <label for="input2" class="col-sm-2 col-form-label">First Name</label>
                <div class="col-sm-10">
                  <input type="text" onChange={handleChange} name="firstName" class="form-control" id="input2" placeholder="First Name" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input3" class="col-sm-2 col-form-label">Middle Name</label>
                <div class="col-sm-10">
                  <input type="text" onChange={handleChange} name="middleName" class="form-control" id="input3" placeholder="Middle Name" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input4" class="col-sm-2 col-form-label">Last Name</label>
                <div class="col-sm-10">
                  <input type="text" onChange={handleChange} name="lastName" class="form-control" id="input4" placeholder="Last Name" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input4" class="col-sm-2 col-form-label">Gender</label>
                <div class="col-sm-10">
                  <input type="text" onChange={handleChange} name="gender" class="form-control" id="input4" placeholder="Gender" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input5" class="col-sm-2 col-form-label">Date of Birth</label>
                <div class="col-sm-10">
                  <input type="text" onChange={handleChange} name="dateOfBirth" class="form-control" id="input5" placeholder="YYYY-MM-DD" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input6" class="col-sm-2 col-form-label">Nationality</label>
                <div class="col-sm-10">
                  <input type="text" onChange={handleChange} name="nationality" class="form-control" id="input6" placeholder="Nationality" />
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
    </main>
  );
}

export default People;
