import { connect } from "react-redux";
import useractioncreator from "../store/actions/usercreator";
import App from "../components/App";

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.current.user,
    currentCompany: reduxState.current.company
  };
}

function mapDispatchToProps(dispatch) {
  /*return {
    loginUser: function(todo) {
      return dispatch(signInUser(user));
    },
  */
}

export default connect(mapStateToProps)(App);
