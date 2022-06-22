import "./Authentication.css";
import { NavBar, Footer, ShadowBox } from "../../components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { userLogin } from "../../utils/authenticate/authenticationCalls";
import { useTopScroll } from "../../utils/hooks";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { authState, dispatchAuth } = useAuth();
  const navigate = useNavigate();

  const testData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  useTopScroll();

  return (
    <main>
      <ShadowBox className="mg-y-auto">
        <form
          onSubmit={(e) =>
            userLogin(e, dispatchAuth, email, password, navigate)
          }
        >
          <div className="h2 txt-center">Login</div>
          <div className="width-100">
            <label className="input-label">
              Email:
              <div className="input-container">
                <input
                  type="email"
                  className="input"
                  id="email"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  id="password"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </label>
          </div>
          <div className="auth-actions">
            <div className="flex-1">
              <label>
                <input type="checkbox" id="remember-me" />
                Remember Me
              </label>
            </div>
            <div className="flex-1">
              <Link to="/signup">Forgot your password?</Link>
            </div>
          </div>
          <div className="auth-actions">
            <div className="flex-1">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </div>

          <div className="auth-actions">
            <div className="flex-1 txt-center">
              <p>
                Don't have an account?
                <span>
                  <Link to="/signup">Sign Up!</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
        <div className="auth-actions">
          <div className="flex-1">
            <button
              className="btn btn-secondary"
              onClick={(e) =>
                userLogin(
                  e,
                  dispatchAuth,
                  testData.email,
                  testData.password,
                  navigate
                )
              }
            >
              Login as guest
            </button>
          </div>
        </div>
      </ShadowBox>
    </main>
  );
};
