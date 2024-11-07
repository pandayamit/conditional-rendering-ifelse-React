import React,{useState} from 'react';
function Profile()
{
    const[LoggedIn,setLoggedIn]=useState(3)
    return(
        <div>
        {LoggedIn==1?
        <h1>Welcome User1</h1>:
        LoggedIn==2?<h1>Welcome User2</h1>:<h1>Welcome User3</h1>}
        </div>
    )
}
export default Profile;