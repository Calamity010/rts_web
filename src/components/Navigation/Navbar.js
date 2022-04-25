import React from "react";
import logo from "../../utilities/images/bootstrap.png";
import "./Navbar.css";

function Navbar() {
  return (
    // <nav class="navbar navbar-light bg-light">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       <img
    //         src={logo}
    //         alt="RTS"
    //         width="30"
    //         height="24"
    //         class="d-inline-block align-text-top"
    //       />
    //     </a>
    //     <div class="d-flex justify-content-center bg-light">
    //       <div class="p-2">Home</div>
    //       <div class="p-2">Courses</div>
    //       <div class="p-2">Notifications</div>
    //       <div class="p-1">
    //         <a
    //           class="btn btn-sm"
    //           data-bs-toggle="offcanvas"
    //           href="#offcanvasExample"
    //           role="button"
    //           aria-controls="offcanvasExample"
    //         >
    //           More
    //         </a>
    //         <div
    //           class="offcanvas offcanvas-start"
    //           tabindex="-1"
    //           id="offcanvasExample"
    //           aria-labelledby="offcanvasExampleLabel"
    //         >
    //           <div class="offcanvas-header">
    //             <h5 class="offcanvas-title" id="offcanvasExampleLabel">
    //               More Options
    //             </h5>
    //             <button
    //               type="button"
    //               class="btn-close text-reset"
    //               data-bs-dismiss="offcanvas"
    //               aria-label="Close"
    //             ></button>
    //           </div>
    //           <div class="offcanvas-body">
    //             <div>
    //               Some text as placeholder. In real life you can have the
    //               elements you have chosen. Like, text, images, lists, etc.
    //             </div>
    //             <ul class="list-group">
    //               <li class="list-group-item">An item</li>
    //               <li class="list-group-item">A second item</li>
    //               <li class="list-group-item">A third item</li>
    //               <li class="list-group-item">A fourth item</li>
    //               <li class="list-group-item">And a fifth one</li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="p-1">
    //         <button type="button" class="btn btn-outline-primary btn-sm">
    //           Login
    //         </button>
    //       </div>
    //       <div class="p-1">
    //         <button type="button" class="btn btn-outline-success btn-sm">
    //           Sign up
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <div class="container-bg">
      <header id="header" class="fixed-top ">
        <div class="container-fluid d-flex align-items-center justify-content-between">
          <h2 class="Logo">
            <a href="index.html" class="logo">
              <img
                class="img-circle"
                src={logo}
                alt=""
                width="50"
                height="45"
              />
            </a>
            <a href="index.html">RTS</a>
          </h2>
          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link scrollto " href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li class=""></li>

              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="#about">
                  Sign up
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
