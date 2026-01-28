import { useState,useEffect } from "react"

const UsersAsyncAwait=()=>{
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const [users,setUsers]=useState([]);
    console.log(users);
    console.log(error)
    const url="https://jsonplaceholder.typicode.com/users"
 
    useEffect(()=>{
        const fetchUsers=async()=>{
        try{
            const response=await fetch(url);
            
            if(!response.ok){
                throw new Error("Response is not OK!")
            }
            const data=await response.json();
            setUsers(data);
        }
        catch(err){
            setError(err.message)
        }
        finally{
            setTimeout(()=>{
                 setLoading(true)
            },2000)
           
        }

    }
    fetchUsers()
    },[])

    if(!loading){
        return<h1>Users List Loading...</h1>
    }

    if(error)
    {
        return<h1>Error occured: {error}</h1>
    }
    
    return(
        // <div>
        //     <h1>Users List</h1>
        //     {users.map((user)=>(    
        //         <div key={user.id}>
                    
        //             <h2>{user.name} - {user.email}</h2>
        //         </div>
        //     )

        //     )}
        // </div>
        <div>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

    }





export default UsersAsyncAwait;