import { connect } from "react-redux";
import { userSignupRequest } from "../store/actions/useractioncreator";
import SignupForm from "../components/molecules/SignupForm";

export default connect(null, { userSignupRequest })(SignupForm);
