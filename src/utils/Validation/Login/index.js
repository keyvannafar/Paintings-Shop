

function loginValidation(loginInfo){
    const errorList =[]
    if(!loginInfo.Email){
        errorList.push({
            target: "Email",
            message: "this Field is empty!",
        })
    }
    if(!loginInfo.Password){
        errorList.push({
            target: "Password",
            message: "this Field is empty!",
        })
    }
    return errorList
}
export default loginValidation

// const products=[{id:1, title: "title1"},]
// localStorage.setItem("card", JSON.stringify(products))