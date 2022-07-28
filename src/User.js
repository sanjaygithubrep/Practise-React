import react from 'react';
function User(props){
    return(
        <div>
            <h1>User</h1>
            <button onClick={()=>props.data()}>Call data function</button>
        </div>
    )
}
export default User;