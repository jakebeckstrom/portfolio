import React from "react";

export default function Contact() {
  return (
    <div
      class="modal fade"
      id="contact"
      tabindex="-1"
      aria-labelledby="contactModal"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Connect with me!
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <p>Send me and email or connect with me on LinkedIn!</p>
            </div>
            <div class="row">
              <div class="col-4">
                <p>Email</p>
                <p>LinkedIn</p>
              </div>
              <div class="col-8">
                <p>jakebeckstrom@gmail.com</p>
                <a href="https://www.linkedin.com/in/jacobbeckstrom/">
                  www.linkedin.com/in/jacobbeckstrom/
                </a>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
