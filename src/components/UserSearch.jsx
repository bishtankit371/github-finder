import {useState, useContext} from "react"
import GithubContext from "../context/GithubContext.jsx"

function UserSearch(){

  const {searchUsers} = useContext(GithubContext);

  const [text, setText] = useState('')

  const handleChange = (e)=>{
    setText(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(text === ''){
      alert("Please enter something");
    }else{
      searchUsers(text);

      setText('')
    }
  }


return (
  <form onSubmit={handleSubmit}>
  <div className="search my-5 d-flex">
     <div>
       <input placeholder="Search User" onChange={handleChange}/>
     </div>
    <div>
      <button type="submit" className="btn btn-sm btn-primary">GO</button>
    </div>
  </div>
  </form>
);

}

export default UserSearch
