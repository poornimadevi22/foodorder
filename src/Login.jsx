import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProtectedRoute from "./ProtectedRoute";
import { Link, useNavigate, Navigate, Outlet } from "react-router-dom";
import Header from "./Header";



export default function Login() {
  const [data, setData] = useState({ login: "", pwd: "" });
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const token = localStorage.getItem("token");

  const validateEmail = () => {
    if (!emailRegex.test(data.login)) {
      setError((prev) => ({
        ...prev,
        login: "Invalid email address",
      }));
      return false;
    }
    setError((prev) => ({ ...prev, login: "" }));
    return true;
  };


  const validatePassword = () => {
    if (!passwordRegex.test(data.pwd)) {
      setError((prev) => ({
        ...prev,
        pwd: "Password must be 8 characters long, include uppercase, lowercase, number, and special character",
      }));
      return false;
    }
    setError((prev) => ({ ...prev, pwd: "" }));
    return true;
  };

 
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      if (data.login === "Admin@2.com" && data.pwd === "Test@123") {
        const token =localStorage.setItem("token", "tokken");
        
        alert("Logged in Successfully!");
        console.log("datas:",data);
      } else {
        alert("Login credentials are incorrect");
      }
    } else {
      console.log("Validation errors:", error);
    }
    // console.log(window.localStorage.setItem("logedin", token));
    // return  (isLoggedin==="true") ? <Sidebar /> && <Header />:<Navigate to="/dash" />
  };
  console.log("token:", token)

  useEffect(()=> {
    if(token==="tokken"){
     navigate('/dash')
      window.location.reload()
    }
  }, [token])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container d-flex" style={{maxWidth:"1160px", padding:"2rem"}}>
          <div className="row">
            <div className="column col-md-6 col-sd-12">
              <img src="src/assets/icon.png" alt="icon" className="imag" />
              <p className="log">Food Order</p>
              <img src="src/assets/food.jpg" alt="food" className="img" />
              <p className="content">
                "Empower your food business operations with precision. Seamlessly
                oversee orders, products, and deliveries for an exceptional customer
                experience."
              </p>
            </div>

            <div className="column2 col-md-6 col-sd-12">
              <p className="font col-sd-12">Login</p>
              <p className="fonts">Please login into your account</p>

              
              <input
                type="email"
                name="login"
                className={`login ${error.login ? "is-invalid" : ""}`}
                placeholder="Email"
                autoComplete="off"
                value={data.login}
                onChange={handleChange}
                onBlur={validateEmail}
              />
              {error.login && <div className="invalid-feedback">{error.login}</div>}

              <div className="input-group mt-3">
                <input
                  type={showPassword ? "text" : "password"}
                  name="pwd"
                  id="pwd"
                  autoComplete="off"
                  className={`form-control ${error.pwd ? "is-invalid" : ""}`}
                  placeholder="Password"
                  value={data.pwd}
                  onChange={handleChange}
                  onBlur={validatePassword}
                  style={{
                    borderRight: "none",
                    borderRadius: "16px 0px 0px 16px",
                    height: "50px",
                  }}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePassword}
                  style={{
                    height: "50px",
                    hover: "none",
                    border: "1px solid #DCDCDC",
                    borderLeft: "none",
                    borderRadius: "0px 12px 12px 0px",
                  }}
                >
                  <i
                    className={`bi ${
                      showPassword ? "bi-eye-fill" : "bi-eye-slash-fill"
                    }`}
                  />
                </button>
              </div>
              {error.pwd && <div className="invalid-feedback">{error.pwd}</div>}

              
              <button className="lbutton mt-3" type="submit">
                Login
              </button>
              <br />

              
              <div className="layout">
                <img src="src/assets/pizza.png" alt="" className="piz" />
                <img src="src/assets/burger.png" alt="" className="burg" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}


