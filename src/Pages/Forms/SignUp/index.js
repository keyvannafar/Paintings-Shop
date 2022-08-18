import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import signUpValidation from "../../../utils/Validation/signUp/index";
function SignUp() {
  const Navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [userInfo, setUserInfo] = useState({
    Name: "",
    Email: "",
    Password: "",
    repeatPassword: "",
  });
  // function setLocalstorage(userInfo) {
  //   localStorage.setItem("signup-item", JSON.stringify(userInfo));
  // }
  const signUp =(e)=>{
    //  alert("o");
    e.preventDefault();
    const result = signUpValidation(userInfo);
    if (result.length) {
      setErrors(result);
    }else{
      
      localStorage.setItem("signup", JSON.stringify(userInfo));
      setErrors([]);
     
  //   fetch("http://localhost:5000/signUp",{
  //     method: "POST",
  //     body: JSON.stringify(userInfo),
  //     headers: {"Content-type":"Application/json"},
  // })
  //  .then((res)=>res.json())
  // //  .then((data)=>)
  //  .catch((error)=>console.log(error))
  }}
  

  return (
    <section class="vh-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            placeholder="Name"
                            onChange={(e) =>
                              setUserInfo({ ...userInfo, Name: e.target.value })
                            }
                          />
                          {errors.length ? (
                            <div>
                              {errors.map((item) =>
                                item.target === "Name" ? (
                                  <span>{item.Namemessage}</span>
                                ) : (
                                  <span></span>
                                )
                              )}
                            </div>
                          ) : (
                            <p></p>
                          )}
                          {/* <label class="form-label" for="form3Example1c">
                            Your Name
                          </label> */}
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                            placeholder="E-mail"
                            onChange={(e) =>
                              setUserInfo({
                                ...userInfo,
                                Email: e.target.value,
                              })
                            }
                          />
                          {errors.length ? (
                            <div>
                              {errors.map((item) =>
                                item.target === "Email" ? (
                                  <span>{item.Emailmessage}</span>
                                ) : (
                                  <span></span>
                                )
                              )}
                            </div>
                          ) : (
                            <p></p>
                          )}
                          {/* <label class="form-label" for="form3Example3c">
                            Your Email
                          </label> */}
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                            placeholder="Password (At least 8 characters)"
                            onChange={(e) =>
                              setUserInfo({
                                ...userInfo,
                                Password: e.target.value,
                              })
                            }
                          />
                          {errors.length ? (
                            <div>
                              {errors.map((item) =>
                                item.target === "Password" ? (
                                  <span>{item.Passwordmessage}</span>
                                ) : (
                                  <span></span>
                                )
                              )}
                            </div>
                          ) : (
                            <p></p>
                          )}
                          <span class="form-label">
                            contains(0-9 a-z A-Z)
                          </span>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            class="form-control"
                            placeholder="Repeat your password"
                            onChange={(e) =>
                              setUserInfo({
                                ...userInfo,
                                repeatPassword: e.target.value,
                              })
                            }
                          />
                          {errors.length ? (
                            <div>
                              {errors.map((item) =>
                                item.target === "repeatpassword" ? (
                                  <span>{item.repeatpasswordmessage}</span>
                                ) : (
                                  <span></span>
                                )
                              )}
                            </div>
                          ) : (
                            <p></p>
                          )}
                          {/* <label class="form-label" for="form3Example4cd">
                            Repeat your password
                          </label> */}
                        </div>
                      </div>
                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label class="form-check-label" htmlFor="form2Example3">
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg"
                          onClick={signUp}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;


