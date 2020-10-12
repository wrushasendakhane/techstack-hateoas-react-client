import React from "react";
import { connect } from "react-redux";
import { deleteCapability } from "../../redux/capability/capability.actions";
import UpdateIcon from "./update-capability/update-icon.component";

function Capability({ capability, onDeleteCapability }) {
  const {
    id,
    techStack,
    noOfDevelopers,
    noOfAvailableDevelopers,
    _links,
  } = capability;

  const onDelete = () => {
    const { deleteThisCapability } = _links;
    onDeleteCapability(id, deleteThisCapability.href);
  };

  return (
    <div className="jumbotron">
      <div className="d-flex justify-content-between">
        <h1>{techStack}</h1>
        <div>
          <UpdateIcon id={capability.id} />
          <i
            className="fa fa-user-times fa-2x"
            aria-hidden="true"
            style={{ color: "red", cursor: "pointer" }}
            onClick={onDelete}
          ></i>
        </div>
      </div>
      <hr className="my-2" />
      <p className="lead">Total Developers in Capability: {noOfDevelopers}</p>
      <p className="lead">
        Available developers for hire: {noOfAvailableDevelopers}
      </p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onDeleteCapability: (id, deleteLink) =>
    dispatch(deleteCapability(id, deleteLink)),
});

export default connect(null, mapDispatchToProps)(Capability);
