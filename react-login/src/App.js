import React, {useState} from "react";
import LoginForm from "./Components/LoginForm";

function App() {

  const admninUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = (details) =>{
    console.log(details);
    if (details.email == admninUser.email && details.password == admninUser.password){
      console.log("Logged In");

      setUser({
        name: details.name,
        email: details.email
      });

    }
    else{
      console.log("Details do not match!");
      setError("Details do not match!");
    }
    
  }

  const Logout = () =>{  
    setUser({name: "", email: ""});
  }

  return (
    
    <div className="App">
      
      { (user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
