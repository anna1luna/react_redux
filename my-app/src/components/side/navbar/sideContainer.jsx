import Side from "./side";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    SideData: state.side.SideData,
  };
};

const SideContainer = connect(mapStateToProps)(Side);
export default SideContainer;
