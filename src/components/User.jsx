import {useParams, Link} from "react-router-dom"
import {useContext, useEffect, useState} from "react"
import GithubContext from "../context/GithubContext.jsx"

function User(){

const params = useParams();
const {getUser, user, loading} = useContext(GithubContext);
var [hireable, setHireable] = useState('');

useEffect(()=>{
  getUser(params.login)
}, []);

if(loading){
  return <h1>Loading..</h1>
}else{
  if(user.hireable === true){
    hireable = "Hireable";
  }else{
    if(user.hireable === false){
      hireable = "Not-Hireable";
    }else{
      hireable = "";
    }
  }

  return (
  <>
<div className="d-flex my-5 px-5">

   <div>
  <img src={user.avatar_url} className="user-img"/>
  </div>

  <div>

    <div className="align-left">
  <h4 className="text-secondary"> {user.login} {hireable ? (<button className="btn btn-light btn-sm">{hireable}</button>) : ""}</h4>
  <p> {user.bio} </p>
  <i className="fa-solid fa-location-dot inline" /><p className="inline"> {user.location} </p>
  <button className="btn btn-secondary btn-md block mt-3"><Link to="/" className="text-white"> Back to search </Link> </button>
    </div>

  </div>

</div>

<div className="mt-5 px-5 d-flex justify-content-around">
<h4>Followers: {user.followers}</h4>
<h4>Following: {user.following}</h4>

</div>

  </>
  );
}




}

export default User
