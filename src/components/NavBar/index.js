import React from "react";
import "./NavBar.css";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserData,
  setSignedIn,
  setUserData,
} from "../../reduxFt/userSlice";
import { Avatar } from "@material-ui/core";

const Navbar = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  // const login = (response) => {
  //   console.log(response);
  //   dispatch(setSignedIn(true));
  //   dispatch(setUserData(response.profileObj));
  // };

  return (
    <div>
      <nav className="navBar">
        <div className="navBarContainer">
          <div className="navLogo">
            <spam>QA</spam>
            Blog
          </div>

          {/* <GoogleLogin
            clientId="24743533305-34dff6evfue77cic6cfl1m71tddgm1du.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login_button"
              >
                LogIn
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
