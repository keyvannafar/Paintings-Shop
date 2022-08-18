

function signUpValidation(userInfo){
    let errorList =[]
    const emailRx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameRx =
      /^([A-Za-z]+[\-\']?)/;
    const passRx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;  
      if(!userInfo.Name){
        errorList.push({
            target: "Name",
            Namemessage: "this field is empty"
        })
    }else if(!userInfo.Name.match(nameRx)){
        errorList.push({
          target: "Name",
          Namemessage: "Name is not Valid!",
        });
    }
    if (!userInfo.Email) {
      errorList.push({
        target: "Email",
        Emailmessage: "this field is empty",
      });
    } else if (!userInfo.Email.match(emailRx)) {
       errorList.push({
         target: "Email",
         Emailmessage: "Email is not Valid!",
       }); 
    }
    if(!userInfo.Password){
        errorList.push({
            target: "Password",
            Passwordmessage: "this field is empty"
        })
    }else if(!userInfo.Password.match(passRx)){
        errorList.push({
          target: "Password",
          Passwordmessage: "Password is not valid!",
        });
    }
    if(!userInfo.repeatPassword){
        errorList.push({
          target: "repeatpassword",
          repeatpasswordmessage: "this field is empty",
        });
    }else if(userInfo.repeatPassword != userInfo.Password){
        errorList.push({
          target: "repeatpassword",
          repeatpasswordmessage: "this field is not Valid",
        });
    }
    // if(!userInfo.address){
    //     errorList.push({
    //       target: "address",
    //       repeatpasswordmessage: "this field is empty",
    //     });
    // }
    return errorList
}

export default signUpValidation;