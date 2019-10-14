import React from 'react';

function Sidebar() {
  return (
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="index.html#">
              <span data-feather="home"></span>
              Academics <span class="sr-only">(current)</span>
            </a>
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
