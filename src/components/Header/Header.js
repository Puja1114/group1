import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
        GROUP1
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="btn text-light text-decoration-none">
              <Link class="text-light text-decoration-none" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="btn text-light text-decoration-none">
              <Link class="text-light text-decoration-none" to="/about">
                About
              </Link>
            </li>
            <li class="btn text-light text-decoration-none">
              <Link class="text-light text-decoration-none" to="/contact">
                Contact
              </Link>
            </li>
            <li class="btn text-light text-decoration-none">
              <Link class="text-light text-decoration-none" to="/draw">
                Draw
              </Link>
            </li>
            <li class="btn text-light text-decoration-none">
              <Link class="text-light text-decoration-none" to="/quiz">
                Quiz
              </Link>
            </li>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">Subject</a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
                <a class="dropdown-item" href="chemistry.js">Chemistry</a>
            </li>
            <li>
                <a class="dropdown-item" href="maths.js">Maths</a>
            </li>
            <li>
                <a class="dropdown-item" href="./src/components/Quiz/QuestionBank.js">Maths</a>
            </li>
            <li>
                <a class="dropdown-item" href="#">Maths</a>
            </li>
            <li>
                <a class="dropdown-item" href="#">Maths</a>
            </li>
            <li>
                <a class="dropdown-item" href="#">Maths</a>
            </li>
            <li>
                <a class="dropdown-item" href="#">Maths</a>
            </li>
            <li>
                <a class="dropdown-item" href="#">Maths</a>
            </li>
            <li>
                <a class="dropdown-item" href="#">Maths</a>
            </li>
        </ul>
    </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Header
