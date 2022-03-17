import {Link} from "react-router-dom"

function UserList({userId, avatar}){

return (
<div className="col-12">

  <div className="box my-2 d-flex">
  <img src={avatar} className="profile-img"/>
  <div className="align-self-end">
  <h5>{userId} </h5>
  <Link to={`user/${userId}`} className="text-secondary text-decoration-none"> Visit Profile</Link>
  </div>
  </div>

</div>
);

}

export default UserList
