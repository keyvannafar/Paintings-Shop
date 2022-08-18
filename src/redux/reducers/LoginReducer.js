const initstate = {
  Login: false
};

const LoginReducer = (state = initstate, action) => {
  if (action.type === "Login") {
    return {
      ...state,
      Login: state.Login=false,
    };
  } else if (action.type === "LogOut") {
    return {
      ...state,
      Login: state.Login=true,
    };
  } else {
    return state;
  }
};

export default LoginReducer;
