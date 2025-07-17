class LoginSystem{
  login(username,password){
    if (this.#checkcredential(username,password)){
      console.log("Logged in")
    }else{
      console.log("login failed")
    }
  }

  #checkcredential(username,password){
    return username==="admin" & password==="1234"
  }
}


const system = new LoginSystem();
system.login("admin", "1234")
