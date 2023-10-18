import Senders from "./senders";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    SendersData: state.messages.SendersData,
  };
};
const SendersContainer = connect(mapStateToProps)(Senders);

export default SendersContainer;
