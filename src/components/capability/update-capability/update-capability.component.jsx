import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  getCapability,
  updateCapability,
} from "../../../redux/capability/capability.actions";

function UpdateCapability({
  id,
  hideModal,
  onGetCapability,
  capability,
  errors,
  onUpdateCapability,
}) {
  const [updatedCapability, setUpdatedCapability] = useState({
    id: 0,
    techStack: "",
    noOfDevelopers: 0,
    noOfAvailableDevelopers: 0,
  });

  useEffect(() => {
    if (capability)
      setUpdatedCapability((prevState) => ({ ...prevState, ...capability }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCapability((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateLink = capability._links.updateThisCapability.href;
    onUpdateCapability(updatedCapability, updateLink, hideModal);
  };

  return (
    <Fragment>
      {capability !== null ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-control-label" htmlFor="techStack">
              Technology Stack
            </label>
            <input
              type="text"
              value={updatedCapability?.techStack}
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
              value={updatedCapability?.noOfDevelopers}
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
            <label
              className="form-control-label"
              htmlFor="noOfAvailableDevelopers"
            >
              Available developers for hire
            </label>
            <input
              type="number"
              value={updatedCapability?.noOfAvailableDevelopers}
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
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={hideModal}
            >
              Close
            </button>
          </div>
        </form>
      ) : null}
    </Fragment>
  );
}

const mapStateToProps = ({ capability }) => ({
  capability: capability.capability,
  errors: capability.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCapability: (id) => dispatch(getCapability(id)),
  onUpdateCapability: (capability, updateLink, hideModal) =>
    dispatch(updateCapability(capability, updateLink, hideModal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCapability);
