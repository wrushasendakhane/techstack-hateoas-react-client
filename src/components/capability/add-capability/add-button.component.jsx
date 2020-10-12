import React, { useState } from "react";
import { connect } from "react-redux";
import AddCapability from "./add-capability.component";
import { clearError } from "../../../redux/capability/capability.actions";
function AddButton({ onClearError }) {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    onClearError();
  };

  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary m-2 btn-sm"
        onClick={showModal}
      >
        <i className="fa fa-user-plus fa-2x" aria-hidden="true"></i>{" "}
        <span className="lead">Add Capability</span>
      </button>
      {modalVisible && (
        <div
          id="myModal"
          className="modal in"
          style={{ display: `${modalVisible ? "block" : "none"}` }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Capability</h4>
                <button type="button" onClick={hideModal} className="close">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <AddCapability hideModal={hideModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onClearError: () => dispatch(clearError()),
});
export default connect(null, mapDispatchToProps)(AddButton);
