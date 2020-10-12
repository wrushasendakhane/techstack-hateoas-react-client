import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCapabilities } from "../../redux/capability/capability.actions";
import AddButton from "../capability/add-capability/add-button.component";
import Capability from "../capability/capability.component";

const Dashboard = ({ capabilities, onInitCapabilities }) => {
  useEffect(() => {
    onInitCapabilities();
  }, []);
  return (
    <Fragment>
      <AddButton />
      {capabilities &&
        capabilities.map((capability) => (
          <Capability key={capability.id} capability={capability} />
        ))}
    </Fragment>
  );
};

const mapStateToProps = ({ capability }) => ({
  capabilities: capability.capabilities,
});

const mapDispatchToProps = (dispatch) => ({
  onInitCapabilities: () => dispatch(fetchCapabilities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
