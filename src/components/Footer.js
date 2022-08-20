import React from "react";

export default function Footer() {
  return (
    <>
      {/* <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <div className="container d-flex">
        <div className="p-2 fw-normal fst-italic">Developed by</div>
        <div className="p-2 flex-grow-1 fw-semibold fs-6"> Muhammad Tayyab Saeed <i class="p-2 fa-brands fa-linkedin"></i>
        <i class="p-2 fa-brands fa-square-github"></i></div>
            

            <p class="p-2"><small class="text-black-50">© 2022. All Rights Reserved.</small></p>
        </div>
       
    </div>
  </nav> */}
      <div class="navbar navbar-inverse navbar-fixed-bottom">
        <div class="container d-flex">
          <p className="fw-normal fst-italic">Developed by</p>
          <p className="p-2 flex-grow-1 fw-semibold fs-6">
            Muhammad Tayyab Saeed
            <a href="https://www.linkedin.com/in/muhammad-tayyab-saeed-116556238/" target="_blank" rel="noopener noreferrer">
              <i class="mx-1 p-2 fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/codaestroTayyab/" target="_blank" rel="noopener noreferrer">
              <i class="mx-1 p-2 fa-brands fa-github"></i>
            </a>
          </p>
          <p class="navbar-text justify-content-end">© 2022. All Right Reserved</p>
        </div>
      </div>
    </>
  );
}
