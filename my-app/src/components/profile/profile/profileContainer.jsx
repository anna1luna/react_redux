import Profile from "./profile";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { NewsData: state.profile.NewsData };
};
const ProfileContainer = connect(mapStateToProps)(Profile);
export default ProfileContainer;
