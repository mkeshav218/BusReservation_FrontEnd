
class AuthenticationService{
    succesfulLogin(userName,password){
        sessionStorage.setItem("authenticatedUser",userName);
        sessionStorage.setItem("authenticatedPassword",password);
    }
    logOut(){
        sessionStorage.removeItem("authenticatedUser"); 
        sessionStorage.removeItem("authenticatedPassword");
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null){
            return false;
        }else{
            return true;
        }
    }
}

export default new AuthenticationService();