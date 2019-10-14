import React from 'react';

function Sidebar() {
  return (
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#submenu" data-toggle="collapse" aria-expanded="false" aria-controls="#submenu">
              <span data-feather="home"></span>
              Academics <span class="sr-only">(current)</span>
            </a>
            <div class="collapse" id="submenu">
              <ul class="nav flex-column sublist">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Courses Offered</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Streams Offered</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Classes</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#">
              <span data-feather="file"></span>
              People
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#">
              <span data-feather="shopping-cart"></span>
              Student
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#">
              <span data-feather="users"></span>
              Faculty
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Sidebar;
