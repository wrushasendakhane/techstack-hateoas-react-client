import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import {
  clearCapability,
  getCapability,
} from "../../../redux/capability/capability.actions";

import UpdateCapability from "./update-capability.component";
function UpdateIcon({ id, onClearCapability, onGetCapability }) {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
    onGetCapability(id);
  };

  const hideModal = () => {
    setModalVisible(false);
    onClearCapability();
  };

  return (
    <Fragment>
      <i
        className="fa fa-pencil fa-2x mr-2"
        aria-hidden="true"
        style={{ color: "blue", cursor: "pointer" }}
        onClick={showModal}
      ></i>
      {modalVisible && (
        <div
          id="myModal"
          className="modal in"
          style={{ display: `${modalVisible ? "block" : "none"}` }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Update Capability</h4>
                <button type="button" onClick={hideModal} className="close">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <UpdateCapability id={id} hideModal={hideModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onClearCapability: () => dispatch(clearCapability()),
  onGetCapability: (id) => dispatch(getCapability(id)),
});
export default connect(null, mapDispatchToProps)(UpdateIcon);
