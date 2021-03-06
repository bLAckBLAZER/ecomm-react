import { NavBar, Footer, ShadowBox } from "../../components";
import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUserDetailsReducer } from "../../reducers/setUserDetailsReducer";
import { userSignup } from "../../utils/authenticate/authenticationCalls";
import { useAuth } from "../../contexts/AuthContext";

export const Signup = () => {
  const [userDetails, dispatchUserDetails] = useReducer(setUserDetailsReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    showPassword,
  } = userDetails;

  const { authState, dispatchAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <main>
      <ShadowBox className="mg-y-auto">
        <form
          onSubmit={(e) => userSignup(e, userDetails, dispatchAuth, navigate)}
        >
          <div className="h2 txt-center">Signup</div>
          <div className="width-100">
            <label className="input-label">
              First Name:
              <div className="input-container">
                <input
                  type="text"
                  className="input"
                  value={firstName}
                  required={true}
                  onChange={(e) =>
                    dispatchUserDetails({
                      type: "FIRST_NAME",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
            </label>
          </div>
          <div className="width-100">
            <label className="input-label">
              Last Name:
              <div className="input-container">
                <input
                  type="text"
                  className="input"
                  value={lastName}
                  required={true}
                  onChange={(e) =>
                    dispatchUserDetails({
                      type: "LAST_NAME",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
            </label>
          </div>
          <div className="width-100">
            <label className="input-label">
              Email:
              <div className="input-container">
                <input
                  type="email"
                  className="input"
                  value={email}
                  required={true}
                  onChange={(e) =>
                    dispatchUserDetails({
                      type: "EMAIL",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
            </label>
          </div>
          <div className="width-100">
            <label className="input-label">
              Password:
              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input"
                  value={password}
                  required={true}
                  onChange={(e) =>
                    dispatchUserDetails({
                      type: "PASSWORD",
                      payload: e.target.value,
                    })
                  }
                />
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() =>
                    dispatchUserDetails({
                      type: "TOGGLE_PASSWORD",
                    })
                  }
                ></i>
              </div>
            </label>
          </div>
          <div className="width-100">
            <label className="input-label">
              Confirm Password:
              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input"
                  value={confirmPassword}
                  required={true}
                  onChange={(e) =>
                    dispatchUserDetails({
                      type: "CONFIRM_PASSWORD",
                      payload: e.target.value,
                    })
                  }
                />
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() =>
                    dispatchUserDetails({
                      type: "TOGGLE_PASSWORD",
                    })
                  }
                ></i>
              </div>
            </label>
          </div>

          <h4 className="error-msg txt-center">
            {password !== confirmPassword
              ? "Both the passwords should match!"
              : ""}
          </h4>

          <div className="auth-actions">
            <div className="flex-1">
              <button
                className={`btn btn-primary ${
                  password !== confirmPassword ? "disabled" : ""
                }`}
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="auth-actions">
            <div className="flex-1 txt-center">
              <p>
                Already have an account?
                <span>
                  <Link to="/login">Log in!</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </ShadowBox>
    </main>
  );
};
