import React,{useState} from 'react';
function Login(){
    const [user,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [userErr,setUserErr]=useState(false)
    const [passErr,setPassErr]=useState(false)
   function loginHandle(e){
       if(user.length<3 || password.length<3){
        alert("type correct value")
       }
       else{
        alert("all good")
       }
        e.preventDefault()
    }
   function userHandler(e){
    let item=e.target.value;
    if(item.length<3){
        setUserErr(true)
    }
    else{
        setUserErr(false)
    }
    setUser(item)
        // console.log(e.target.value)
    }
   function passwordHandler(e){
    let item=e.target.value;
    if(item.length<3){
        setPassErr(true)
    }
    else{
        setPassErr(false)
    }
    setPassword(item)
        // console.log(e.target.value)
    }
    return(
        <div>
            <h1>login</h1>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter User Id" onChange={userHandler} />
            {userErr?<span>User Not valid</span>:""}
            <br />
            <br />
            <input type="password" placeholder="Enter User Password" onChange={passwordHandler} />
            {passErr?<span>Password Not valid</span>:""}
            <br />
            <br />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;