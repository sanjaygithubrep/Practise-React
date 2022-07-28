import React from 'react'
import {useState} from 'react';
function Conditional(){
    const [loggedIn, setLoggedIn]= useState(1)
    return(
        <div>
        {loggedIn==1?<h1>Welcome Sanjay</h1>
        :loggedIn==2?<h1>Welcome sanju</h1>
        :<h1>Welcome Guest</h1>}
        </div>
    )
}
export default Conditional;