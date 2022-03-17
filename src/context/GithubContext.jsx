import {createContext, useState} from "react"

const GithubContext = createContext();



export const GithubProvider = ({children}) =>{

const [users, setUsers] = useState([]);
const [user, setUser] = useState();
const [loading, setLoading] = useState(true);

const searchUsers = async (text)=>{
  const response = await fetch(`https://api.github.com/search/users?q=${text}`);
  const {items} = await response.json();
  setUsers(items);
}

// Get single User

const getUser = async (userId) =>{
  const response = await fetch(`https://api.github.com/users/${userId}`);
    const data = await response.json();
      setUser(data);
      setLoading(false);
}



return <GithubContext.Provider value={{
  users,
  searchUsers,
  getUser,
  user,
  loading,
}}>
{children}
</GithubContext.Provider>

}

export default GithubContext
