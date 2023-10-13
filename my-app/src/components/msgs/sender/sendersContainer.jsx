import Sender from "../sender";
import Senders from "./senders";
import storeContext from "../../../storeContext";

const SendersContainer = (props) => {
  return (
    <storeContext.Consumer>
      {(store) => {
        const state = store.getState();
        const SendersData = state.messages.SendersData;
        let SendersReady = SendersData.map((sender) => (
          <Sender name={sender.name} id={sender.id} />
        ));
        return <Senders SendersReady={SendersReady} />;
      }}
    </storeContext.Consumer>
  );
};

export default SendersContainer;
