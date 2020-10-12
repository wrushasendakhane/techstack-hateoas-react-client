import React, { useState } from "react";
import { addCapability } from "../../../redux/capability/capability.actions";
import classnames from "classnames";
import { connect } from "react-redux";

function AddCapability({ hideModal, errors, createLink, onAddCapability }) {
  const [newCapability, setNewCapability] = useState({
    techStack: "",
    noOfDevelopers: 0,
    noOfAvailableDevelopers: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCapability((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCapability(newCapability, createLink, hideModal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-control-label" htmlFor="techStack">
          Technology Stack
        </label>
        <input
          type="text"
          value={newCapability?.techStack}
          className={classnames("form-control", {
            "is-invalid": errors?.techStack,
          })}
          name="techStack"
          onChange={handleChange}
        />
        {errors?.techStack && (
          <div className="invalid-feedback">{errors.techStack}</div>
        )}
      </div>

      <div className="form-group">
        <label className="form-control-label" htmlFor="noOfDevelopers">
          Total Developers in Capability
        </label>
        <input
          type="number"
          value={newCapability?.noOfDevelopers}
          className={classnames("form-control", {
            "is-invalid": errors?.noOfDevelopers,
          })}
          name="noOfDevelopers"
          onChange={handleChange}
        />
        {errors?.noOfDevelopers && (
          <div className="invalid-feedback">{errors.noOfDevelopers}</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-control-label" htmlFor="noOfAvailableDevelopers">
          Available developers for hire
        </label>
        <input
          type="number"
          value={newCapability?.noOfAvailableDevelopers}
          className={classnames("form-control", {
            "is-invalid": errors?.noOfAvailableDevelopers,
          })}
          name="noOfAvailableDevelopers"
          onChange={handleChange}
        />
        {errors?.noOfAvailableDevelopers && (
          <div className="invalid-feedback">
            {errors.noOfAvailableDevelopers}
          </div>
        )}
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
        <button type="button" className="btn btn-secondary" onClick={hideModal}>
          Close
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = ({ capability }) => ({
  createLink: capability.links?.createCapability.href,
  errors: capability.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onAddCapability: (capability, createLink, hideModal) =>
    dispatch(addCapability(capability, createLink, hideModal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCapability);
