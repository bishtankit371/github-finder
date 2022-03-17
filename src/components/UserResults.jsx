import {useEffect, useContext} from "react"
import UserList from "./UserList.jsx"
import GithubContext from "../context/GithubContext.jsx"

function UserResults(){

  const {users, searchUsers} = useContext(GithubContext);

  // useEffect(()=>{
  //   searchUsers();
  // }, []);

return (
  <div className="row users-div">
    {users.map((user) =>(
      <UserList userId={user.login} avatar={user.avatar_url}/>
    ))}
  </div>
)

}

export default UserResults
