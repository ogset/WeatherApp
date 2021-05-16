import React from "react";
import "./form.style.css";
function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please enter city and country.
    </div>
  );
}
export default function Form(props) {
  return (
    <div className="container h-100">
      <div>{props.error ? error() : ""}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
}
