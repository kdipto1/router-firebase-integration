import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const {signInWithGoogle} = useFirebase({})
  return (
    <div>
      <h2>Login Page</h2>
      <div style={{margin:"20px"}}>
        <button onClick={signInWithGoogle}>Google SignIn</button>
      </div>
      <form action="">
        <input type="email" name="" placeholder="your email" />
        <br />
        <input type="password" name="" placeholder="Your password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
