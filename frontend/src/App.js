import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import Register from "./components/register/index";
import Main from "./components/main/index";


function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
	  <Route path="/register" component={Register} />
	  <Route path="/Main" component={Main} />
    
    
    </div>
  );
}

export default App;



//=========================================
//Google



// import React, { Component } from 'react'
// import GoogleLogin from 'react-google-login'
// export default class Google extends Component {

//   responseGoogle=(response)=>{
//     console.log(response);
//     console.log(response.profileObj);
    
    
//   }
//   render() {
//     return (
//       <div>
//         <GoogleLogin
//         clientId="700589332118-kt5mljv27k4g61a5c75qp5fpojdmk6ip.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={this.responseGoogle}
//         onFailure={this.responseGoogle}
//         cookiePolicy={'single_host_origin'}
        
//         />
//       </div>
//     )
//   }
// }



// ===============================================
// Facebook



// import React from 'react';
// import FacebookLogin from 'react-facebook-login';

// const responseFacebook = (response) => {
//   console.log("login result",response);
// }
// const componentClicked = (data) => {
//   console.warn(data);
// }
// export default class facebook extends React.Component {
//   render() {
//     return (
//       <div>
//         <FacebookLogin
//     appId="189215819794056"
//     autoLoad={true}
//     fields="name,email,picture"
//     onClick={componentClicked}
//     callback={responseFacebook} />
//       </div>
//     )
//   }
// }
