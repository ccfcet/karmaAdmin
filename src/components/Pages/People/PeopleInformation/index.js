import React, { useState, useEffect } from 'react';
import axios from 'axios';

let api_root = process.env.REACT_APP_API_ROOT
function PeopleInformation() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(api_root + 'private/people/people_information')
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
          <td>{item.people_id}</td>
          <td>{item.slug_id}</td>
          <td>{item.data}</td>
          {/* <td><i class="fa fa-pencil edit-icon"></i><i class="fa fa-minus-circle delete-icon"></i></td> */}
        </tr>
    )
  })

  function handlePost(e) {
    e.preventDefault();
    let newData = {
      'peopleId': e.target.peopleId.value,
      'slugId': e.target.slugId.value,
      'data': e.target.data.value
    }
    axios.post(api_root + 'private/people/people_information', newData)
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
    
  }
  return (
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <h3 class="content-head">People Information</h3>
      <div class="table-responsive">
        <div class="btn-container text-right">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#insertModal"><i class="fa fa-plus-circle add-button"></i> Insert</button> 
        </div>
        
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>ID</th>
              <th>People ID</th>
              <th>Slug ID</th>
              <th>Data</th>
              {/* <th>Options</th> */}
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
              <h5 class="modal-title" id="insertModalLabel">Insert into People Information</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form onSubmit={handlePost}>
              <div class="form-group row">
                <label for="input2" class="col-sm-2 col-form-label">People ID</label>
                <div class="col-sm-10">
                  <input type="text" name="peopleId" class="form-control" id="input2" placeholder="People ID" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input3" class="col-sm-2 col-form-label">Slug</label>
                <div class="col-sm-10">
                  <input type="text" name="slugId" class="form-control" id="input3" placeholder="Slug" />
                </div>
              </div>
              <div class="form-group row">
                <label for="input4" class="col-sm-2 col-form-label">Data</label>
                <div class="col-sm-10">
                  <input type="text" nam="data" class="form-control" id="input4" placeholder="Data" />
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

export default PeopleInformation;
