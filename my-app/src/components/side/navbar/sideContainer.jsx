import Friends from "../friends";
import Side from "./side";
import storeContext from "../../../storeContext";

const SideContainer = (props) => {
  return (
    <storeContext.Consumer>
      {(store) => {
        const state = store.getState();
        const SideData = state.side.SideData;
        let SideReady = SideData.map((friends) => (
          <Friends name={friends.name} />
        ));

        return <Side SideReady={SideReady} />;
      }}
    </storeContext.Consumer>
  );
};

export default SideContainer;
